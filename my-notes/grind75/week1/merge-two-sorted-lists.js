/**
 * @see {@link replace_this_with_leetcode_link Week 1 - Problem Name Here}
 */

/**
 * REMINDER
 * open wsplit/stopwatch before starting
 * ONLY hit splits/lap while working
 * fill in times after problem session done
 */

/**
 * REACTO System
 * READ
 * - what are the high level problem objectives?
 * - what are the inputs and outputs?
 * - what are the constraints?
 * - what are the examples provided and what do they mean?
 */

// READ notes here

/**
 * EXPLAIN
 * - what are problem objectives?
 * - what did you learn from examples provided?
 * - what are possible edge cases?
 */

// EXPLAIN notes here

/**
 * APPROACH
 * - write solution structure in PSUEDOCODE
 * - basically simple english instructions to solve
 */

// APPROACH notes here

/**
 * CODE below
 */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

//Linked Lists : https://github.com/bradtraversy/traversy-js-challenges/blob/main/07-stacks-queues-linked-lists/10-linked-list-implementation/readme.md

//https://javascript.plainenglish.io/linked-list-implementation-in-javascript-ca0d3038f797

//Result: learned a little about nodes and lists, found out after there is an easier solution than creating new nodes and a new list, you can reuse nodes

//Example solution of resusing nodes breakdown

//create a 'dummyNode' which is a placeholder node at the start of our spliced linked list
//create a reference to our dummy node
//create a reference to our two given lists
//while lists are not null| evaluate 2 current values against eachother and assign to our dummy and iterate lists accordingly
//iterate our reference to our dummy node

//eventually one list will end up null, with one having nodes remaining, evaluate and .next accordingly
//return the dummyNode.next which provides the head of the sorted list by iterating over the placeholder value

function mergeTwoLists(list1, list2) {
  let dummyNode = new ListNode(-1);
  let currentNode = dummyNode;
  let list1Data = list1;
  let list2Data = list2;

  while (list1Data !== null && list2Data !== null) {
    if (list1Data.val < list2Data.val) {
      currentNode.next = list1Data;
      list1Data = list1Data.next;
    } else {
      currentNode.next = list2Data;
      list2Data = list2Data.next;
    }
    currentNode = currentNode.next;
  }
  currentNode.next = list1Data !== null ? list1Data : list2Data;

  return dummyNode.next;
}

//FIRST ATTEMPT
// var mergeTwoLists = function(list1, list2) {

// class SinglyLinkedList {
//    constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   push(val){
//   const node = new ListNode(val);

//   if (this.head === null) {
//     this.head = node;
//     this.tail = this.head;
//   } else {
//     this.tail.next = node;
//     this.tail = node;
//   }
//   return this;
// }
// }

// const mergedList = new SinglyLinkedList(); //creates a new linked list based on the structure above.

// let listData1 = list1; //creating a reference to the nodes
// let listData2 = list2;

// while(listData1 || listData2)//while at least one is not null
// {
//   if(listData1 && listData2 && listData1.val < listData2.val){
//         //if both listDatas are not null and listData 1 is less than the current listData 2 value proceed
//         mergedList.push(listData1.val); //create new node = to current list1 node value
//         listData1 = listData1.next; //iterate list 1 node

//     }
//     else if(listData2){
//         //if list data 1 > list data 2 and list data 2 is not null push list data 2
//         mergedList.push(listData2.val);
//         listData2 = listData2.next;
//     }
//     else{
//         //list data 2 is null, push list data 1
//         mergedList.push(listData1.val);
//         listData1 = listData1.next;
//     }
// }
// return mergedList.head; //return head of the merged list

// };

/**
 * COMPLEXITY
 *
 * Copy your function implementation into ChatGPT and ask it for time and space complexity analysis. Be sure to ask questions if you don't understand terms/topics/etc.
 *
 * TIME   O(), where...
 * SPACE  O(), where...
 */

// COMPLEXITY notes here

/**
 * OPTIMIZE
 * Once you have a working answer, re-examine implementation
 * How can you optimize it?
 */

// OPTIMIZE notes here

/**
 * use wsplit or just a stopwatch app with a lap timer for this
 *
 *                  Total   Split
 *
 * READ             00:47
 * EXPLAIN          01:31   02:18
 * APPROACH         12:48   15:07
 * CODE [PASS]      12:27   27:36
 * TEST             06:01   33:37
 * OPTIMIZE         24:37   58:38
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
