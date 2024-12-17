/**
 * getPostsByUser
 *
 * `getPostsByUser` accepts two callbacks, `fetchUserData` and `fetchUserPosts`.
 *
 * Assume both callbacks are predefined; you just need to call them correctly within `getPostsByUser`.
 *
 * - `fetchUserData`: A callback that accepts no parameters and returns a Promise that resolves to an object with the shape `{ id: number, name: string }`.
 * - `fetchUserPosts`: A callback that accepts the user's ID and returns a Promise that resolves to an array of objects, each with the shape `{ id: number, title: string }`.
 *
 * If both callbacks succeed, `getPostsByUser` returns an object containing the user data and their associated posts.
 * If an error occurs during either callback, `getPostsByUser` handles the error and returns an object with an error message.
 *
 * @category 08 - Async/Await & APIs
 * @function getPostsByUser
 * @param {Function} fetchUserData - A callback that fetches user data and returns a Promise.
 * @param {Function} fetchUserPosts - A callback that fetches user posts based on the user's ID and returns a Promise.
 * @returns {Promise<Object>} Resolves with an object containing the user data and posts, or an error message.
 *
 * @example
 * const userData = await getPostsByUser(fetchUserData, fetchUserPosts);
 * // Returns: { user: { id: 1, name: 'Alice' }, posts: [ { id: 101, title: 'Post 1' } ] }
 *
 * @example
 * const userData = await getPostsByUser(fetchUserData, fetchUserPosts);
 * // If an error occurs during fetching:
 * // Returns: { error: "Failed to fetch data" }
 */
// Two callback functions passed into getPostsByUser (fetchUserData and fetchUserPosts)
// fetchUserData needs no parameters, return a promise that resolves to an object with {id: Number, name: string}
// fetchUserPosts accepts User Id and returns a Promise that resolves to an array of objects with {id: Number, title: string}

// A check will be needed (.then) for the case where both promises fulfill where an object is returned with userdata and user posts, one object so the objects will be merged
// A an error will be needed for a rejection from either callback, returns an object containing an error.
//.then chaining to the eventual return object seems useful

export const getPostsByUser = (fetchUserData, fetchUserPosts) => {
  return fetchUserData() //fetchUserPosts is reliant on fetchUserData resolving
    .then(
      (
        user //.then passes the userData into fetchUserPosts which uses the id in the userData object to attempt to fulfill its .then which returns an object containing user and posts
      ) =>
        fetchUserPosts(user.id).then((posts) => ({
          user,
          posts,
        }))
    )
    .catch(() => ({ error: "Failed to fetch data" })); //if either fail .catch returns an object containing an error;
};
