/**
 * There are 100 doors in a row that are all initially closed. You make 100 passes by the doors.
 * The first time through, visit every door and 'toggle' the door (if the door is closed, open it; if it
 * is open, close it). The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle
 * it. The third time, visit every 3rd door (i.e., door #3, #6, #9, ...), etc., until you only visit the
 * 100th door.
 *
 * Implement a function to determine the state of the doors after the last pass.
 * Return the final result in an array, with only the door number included in the array
 * if it is open.
 */

function getFinalOpenedDoors(numDoors) {
    var doors = []
    for (var i = 1; i <= 100; i++) {
      doors[i] = true
    }
  
    // for n=2-100, toggle every n door.
    for (var x = 2; x <= 100; x++) {
      for (var y = x; y<=100; y = y + x) {
        doors[y] = !doors[y]
      }
    }
  
    var result = []
    for (var i = 1; i <= 100; i++) {
      if (doors[i]) {
        // if door is true
        result.push(i) // push door number to array
      }
    }
    console.log(result)
    return result
  }
  getFinalOpenedDoors();  