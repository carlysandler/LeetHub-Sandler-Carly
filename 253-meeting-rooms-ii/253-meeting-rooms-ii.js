/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    if (intervals.length === 1) return 1;
    if (intervals.length === 0 ) return 0;
    
    let rooms = 0,
        end = 0;
    
    let starts = intervals.map(a => a[0]).sort((a, b) => a - b);
    console.log(starts)
    let ends = intervals.map(a => a[1]).sort((a, b) => a - b);
    console.log(ends)
    for (let i = 0; i < intervals.length; i++) {
       if (starts[i] < ends[end]) rooms++
        else end++
    }
    return rooms;
    
};

