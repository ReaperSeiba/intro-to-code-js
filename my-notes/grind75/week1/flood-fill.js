/**
 * @see {@link https://leetcode.com/problems/flood-fill/description/ Week 1 - Flood Fill}
 */

/**
 * REMINDER
 * open wsplit/stopwatch before starting
 * ONLY hit splits/lap while working
 * fill in times after problem session done
 */

/**
 * EXPLAIN
 * - what are problem objectives?
 * - what did you learn from examples provided?
 * - what are possible edge cases?
 *
 *  Given a 2d grid where each point represents a pixel's color.
 *  Recursively update all pixels that are the same as the original points color that are directly adjacent (vertical/horizontal)
 *  Return the updated image.
 *
 * What did I learn: Similar to a fill bucket tool for paint programs.
 * No diagonal spread.
 *
 *
 * Edge case: Empty Image
 * Color already matches?
 * Larger images may need a different approach to not overflow the stack?
 */

/**
 * APPROACH
 * - write solution structure in PSUEDOCODE
 * - basically simple english instructions to solve
 *
 * Determine the original color or color to be changed
 *
 * If the color matches the updated color return the image as the flood would have no use.
 *
 * Helper function:
 * Returns if current pixel is out of bounds/not valid or it is a new color that doesn't match the original to be flipped
 * Change the color of current pixel to new color if valid
 * Recursive Call the function on the next pixels to be flipped
 *
 * To start function, call helper function on starting pixel.
 */

/**
 * CODE below
 */

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
function floodFill(image, sr, sc, color) {
  let startingPixel = image[sr][sc]; //

  if (startingPixel === color) {
    return image;
  }
  fill(image, sr, sc, color, startingPixel); //Start recursion
  return image;
}
function fill(image, sr, sc, color, startingPixel) {
  if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length) {
    return;
  } //if either coord is negative return, if row is greater than length or = return, if column > image[0] column count return

  if (image[sr][sc] != startingPixel) {
    return;
  } //if current pixel does not = the original color return.

  image[sr][sc] = color; //set pixel to the color

  fill(image, sr - 1, sc, color, startingPixel);
  fill(image, sr + 1, sc, color, startingPixel);
  fill(image, sr, sc - 1, color, startingPixel);
  fill(image, sr, sc + 1, color, startingPixel);

  //4 recursive calls that update the starting positions by 1 coordinate position.
}

/**
 * COMPLEXITY
 *
 * Copy your function implementation into ChatGPT and ask it for time and space complexity analysis. Be sure to ask questions if you don't understand terms/topics/etc.
 *
 * /**
 * TIME   O(m * n), where m = rows and n = columns of the image
 * SPACE  O(m * n) in the worst case due to recursion stack
 */

/**
 * OPTIMIZE
 * Once you have a working answer, re-examine implementation
 * How can you optimize it?
 *
 * A recursive approach may not be efficient for larger images. If possible exploring solutions
 * that work with any image size could be possible.
 */

/**
 * use wsplit or just a stopwatch app with a lap timer for this
 *
 *                  Total   Split
 *
 * READ             01:30   01:30
 * EXPLAIN          09:49   08:19
 * APPROACH         18:57   09:08
 * CODE [PASS]      52:59   34:02
 * TEST             54:29   01:30
 * OPTIMIZE         55:52   01:23
 */
