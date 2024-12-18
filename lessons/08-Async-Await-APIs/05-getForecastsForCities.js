/**
 * getForecastsForCities
 *
 * `getForecastsForCities` accepts an array of `cities` to fetch weather data for, and a callback `fetchForecast`.
 *
 * Assume the `fetchForecast` callback is predefined; you just need to call in correctly.
 *
 * The `fetchForecast` callback accepts a string, `city`, and returns a Promise that resolves with the city's weather data, or rejects if the city is not found.
 *
 * `getForecastsForCities` gathers all the results of the Promises returned for each city, returns them in an object, grouped by how their `fetchForecast` Promise resolved.
 * - `successful`: An array of city names and their weather data for successful fetches.
 * - `failed`: An array of city names for failed fetches.
 *
 * If all forecast requests fail, `fetchForecast` instead returns a failure message.
 *
 * @category 08 - Async/Await & APIs
 * @function getForecastsForCities
 * @param {Array<string>} cities - An array of city names to fetch weather data for.
 * @param {Function} fetchForecast - A callback that takes a city name and returns a Promise resolving with weather data.
 * @returns {Promise<Object|string>} Resolves with an object containing weather data or an error message.
 *
 * @example
 * const weatherData = await getForecastsForCities(["New York", "Atlantis", "Los Angeles"], fetchForecast);
 * console.log(weatherData)
 * // {
 * //   successful: [
 * //     {
 * //       city: "New York",
 * //       data: { temperature: 65, condition: "Cloudy" },
 * //     },
 * //     {
 * //       city: "Los Angeles",
 * //       data: { temperature: 78, condition: "Clear" },
 * //     },
 * //   ],
 * //   failed: ["Atlantis"],
 * // };
 *
 * @example
 * const weatherData = await getForecastsForCities(["Vice City", "Hyrule Town"], fetchForecast);
 * // Returns: "Failed to fetch weather data for all cities"
 */

// array of cities is provided to fetch weather data from
// a callback function 'fetchForecast' is provided and predefined as an input parameter
// fetchForecast accepts a string ('city'), returns a promise containing the city's weather data, rejects if city is not found

// getForecastsForCities should return an object containing Promises for each city grouped by successful (with data) and failed
// if all requests fail return a failure message

//Potentially useful: forEach for cycling through the array ***forEach will not pause for asynchrounous operations, for of loops are the proper way!!!***, awaits for each city tested, builds and object with the required return data.

export async function getForecastsForCities(cities, fetchForecast) {
  const cityData = { successful: [], failed: [] }; //stores eventual data for the succesful and failed cities
  let oneSuccess = false;
  for (const city of cities) //for of loop works well with await {
    try {
      //try allows error handling in async
      cityData["successful"].push({
        city: city,
        data: await fetchForecast(city),
      });
      oneSuccess = true;
    } catch {
      //handles error
      cityData["failed"].push(city);
    } finally {
      if (oneSuccess) {
        console.log("All available forecasts fetched"); //always returns at end of the try/catch if no success was found
      } else {
        return "Failed to fetch weather data for all cities"; //only returns at the end of try/catch when no success was found
      }
    }
  if (oneSuccess) {
    //only returns cityData object if at least one success was found
    return cityData;
  }
}

// Using try/catch & async/await
export async function getForecastsForCities(cities, fetchForecast) {
  const successful = [];
  const failed = [];

  const weatherPromises = cities.map((city) => fetchForecast(city));
  const results = await Promise.allSettled(weatherPromises);

  results.forEach((result, index) => {
    const city = cities[index];

    if (result.status === "fulfilled") {
      successful.push({ city, data: result.value });
    } else {
      failed.push(city);
    }
  });

  if (successful.length === 0) {
    return "Failed to fetch weather data for all cities";
  }

  console.log("All available forecasts fetched");

  return { successful, failed };
}
