# 基础小练习

### 字符串排列
``` js
/**
 * #006 字符串排列
 * 输入一个字符串，按字典序打印出该字符串中字符的所有排列。
 * 例如输入字符串abc，则打印出由字符a,b,c所能排列出来的所有字符串
 * abc,acb,bac,cab和cba。
 */
//思路：记录一个当前索引，不断交换数组中的元素
function Permutation(str) {
    const result = [];
    if (!str) {
        return result;
    }
    const array = str.split('');
    permutate(array, 0, result);
    result.sort();
    return [...new Set(result)];
}
function permutate(array, index, result) {
    if (array.length - 1 === index) {
        result.push(array.join(''));
    }
    for (let i = index; i < array.length; i++) {
        swap(array, index, i);
        permutate(array, index + 1, result);
        swap(array, i, index);
    }
}
function swap(array, index, i) {
    let temp = array[index];
    array[index] = array[i];
    array[i] = temp;
}


// 测试代码
strFullArray('abcd');
strFullArray('aabc');

const strFullArray = (str) => {
    let result = [];

    if (str.length <= 1) {
        return str;
    }
    if (str.length === 2) {
        return [str, str[1] + str[0]];
    }

    const first = str[0];
    const rest = strFullArray(str.slice(1));

    for (let i = 0; i < rest.length; i++) {
        for (let j = 0; j < rest[i].length + 1; j++) {
            result.push(`${rest[i].slice(0, j)}${first}${rest[i].slice(j, rest.length)}`)
        }
    }
    result.sort();
    return Array.from(new Set(result));
    // return [...new Set(result)];

}

const strFullArray1 = (str) => {
    let result = [];

    if (str.length <= 1) {
        return str;
    }
    if (str.length === 2) {
        return [str, str[1] + str[0]];
    }

    const first = str[0];
    const rest = strFullArray1(str.slice(1));

    for (let i = 0; i < rest.length; i++) {
        for (let j = 0; j < rest[i].length + 1; j++) {
            result.push(`${rest[i].slice(0, j)}${first}${rest[i].slice(j, rest.length)}`)
        }
    }
    result.sort();
    return [...new Set(result)];
}

```

### 旋转数组的最小数字
```js
/**
 * #008 旋转数组的最小数字
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
 * 输入一个非减排序的数组的一个旋转，输出旋转数组的最小元素。
 * 例如数组[3,4,5,1,2]为[1,2,3,4,5]的一个旋转，该数组的最小值为1.
 * 
 * NOTE:给出的所有元素都大于0，若数组大小为0，请返回0。
 * 
 * 基本思路
 * 不能直接遍历，失去了这道题的意义。旋转数组其实是由2个有序数组拼接而成的，
 * 因此可以使用二分法，只需要找到拼接点即可。
 * 
 * 1.array[mid] > array[high]:
 * 出现这种情况的array类似[3,4,5,6,0,1,2]，
 * 此时最小数字一定在mid的右边。low=mid+1
 * 2.array[mid] == array[high]:
 * 出现这种情况的array类似[1,0,1,1,1]或者[1,1,1,0,1],
 * 此时最小数字不好判断在mid左边还是右边,这时只好一个一个试。hign=high-1
 * 3.array[mid] < array[high]:
 * 出现这种情况的array类似[2,2,3,4,5,6,6],
 * 此时最小数字一定就是array[mid]或者在mid的左边。
 * 因为右边必然都是递增的。high=mid
 */
function minNumberInRotateArray(arr) {
    let len = arr.length;
    if (len == 0) {
        return 0;
    }
    let low = 0, high = len - 1;
    while (low < high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] > arr[high]) {
            low = mid + 1;
        } else if (arr[mid] == arr[high]) {
            high = high - 1;
        } else {
            high = mid;
        }
    }
    return arr[low];
}
```

### 数组统计
```js
/**
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 * 
 * 分析：题目假设很重要，数组非空，且一定存在存在多数的元素
 * 拓展思考：如果题目没假设数组中一定存在数目大于一半的元素，例如[1,2,3]
 * 此时还需要遍历一遍，统计一下result的出现次数。
 */
/**
 * 解法1：哈希表统计次数
 * 借助哈希表，哈希表的键是数字，值是数字出现的次数：
 * 遍历数组，统计数字和出现次数
 * 遍历哈希表，返回出现次数超过长度一半的数字
 * 注意，这里要使用ES6的Map，不要使用json对象。因为json对象的键存在着
 * “隐式类型转换”，所有的键会被转换为字符串，从而导致不易排查的bug。
 * 
 * 遍历2次，时间复杂度是O(N).哈希表存储次数，空间复杂度是O(N).
 */
var majorityElement = function (nums) {
    const map = new Map();
    const length = nums.length;

    nums.forEach(num => {
        const times = map.get(num);
        if (times === undefined) {
            // 没有该元素则添加 元素作为键，值为出现次数1
            map.set(num, 1);
        } else {
            // 有该元素则作为值的出现次数加1
            map.set(num, times + 1);
        }
    });
    for (const key of map.keys()) {
        // 遍历作为统计数组值出现次数的map的key
        if (map.get(key) > length / 2) {
            // 找出出现次数大于数组长度一半的数组元素
            return key;
        }
    }
}
/** 
* 解法2(推荐):摩尔投票算法
* 分析题目：只可能有1个数字的出现次数超过数组长度的一半。也就是说这个数字的
* 出现总数比其他数字的出现次数和还要多。
* 
* 定义变量 result 和 times。第一次遍历原数组的时候：
* times = 0，那么 result 等于当前元素，times 变为1
* times ！= 0 且 result ！= 当前元素，times 减1
* times ！= 0 且 result = 当前元素，times 加1
* 遍历完成后，result 的值就是数组中出现次数超过一半的数字了。
* 
* 时间复杂度O(N) 空间复杂度O(1) 优于解法1
* 题目已经假设了一定存在多数的元素，不需要二次遍历进行确定。
*/
var majorityElement = function (nums) {
    let times = 0;
    let result = 0;

    nums.forEach(num => {
        if (times === 0) {
            times = 1;
            result = num;
        } else if (num === result) {
            times += 1;
        } else {
            times -= 1;
        }
    });
    return result;
}
```

### 栈&队列
```js
/**
 * 用两个栈来实现一个队列，完成队列的Push和Pop操作。队列中的元素为int类型。
 * 
 * 栈：后入先出
 * 队列：先进先出
 * 栈的特性：后入先出。根据题目提示，使用2个栈即可。一个栈inStack用来存储插入队列的数据，
 * 一个栈outStack用来从队列中取出数据。
 * 算法分为入队和出队过程。
 * 入队过程：将元素放入inStack中。
 * 出队过程：outStack不为空：弹出元素；
 *         ouStack为空：将inStack元素依次弹出，放入到outStack中(在数据转移过程中，
 * 顺序已经从后入先出变成了先入先出)
 * 时间复杂度是O(N)，空间复杂度是O(N)
 */
var CQueue = function(){
    this.inStack = [];
    this.outStack = [];
};
CQueue.prototype.appendTail = function(value){
    this.inStack.push(value);
};
CQueue.prototype.deleteHead = function(){
    const {inStack,outStack} = this;
    if (outStack.length) {
        return outStack.pop();
    } else {
        while(inStack.length){
            outStack.push(inStack.pop());
        }
        return outStack.pop() || -1;
    }
};
/**
 * mine
 * let stack1 = [], stack2 = [];
function push(n) {
    stack1.push(n);
}
function pop() {
    if (stack2.length > 0) return stack2.pop();

    let length = stack1.length;
    if (length === 0) return null;

    for (let i = 0; i < length; i++) {
        stack2.push(stack1.pop());
    }
    return stack2.pop();
}
 */


/**
 * 拓展思考：用两个队列实现一个栈
 * 类似地，用两个队列也可以实现一个栈。但由于队列是先入先出，无论怎么倒换都不可能逆序队列。所以处理思路并不一样。
 * 准备两个队列q1和q2。算法过程分为入栈和出栈。
 * 入栈过程：
 * q1为空，放入q2
 * q2为空，放入q1
 * 均为空，默认放入q1
 * 出栈过程：
 * q1为空：依次取出q2中的元素(除了最后一个)，并且放入q1中 取出q2中的最后一个元素，返回结果
 * q2为空：依次取出q1中的元素(除了最后一个)，并且放入q2中 取出q1中的最后一个元素，返回结果
 * 时间复杂度是O(N)，空间复杂度是O(N)。
 */

```

### 把数组排成最小的数

