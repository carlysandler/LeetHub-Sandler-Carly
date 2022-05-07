/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.size = size;
    this.arr = [];
    this.prefixSum = 0;
    
    
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if (this.arr.length === this.size) {
        this.prefixSum -= this.arr.shift()
    }
    this.arr.push(val);
    this.prefixSum += val;
    
    return this.prefixSum / this.arr.length;
       
};
    
   
    

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */