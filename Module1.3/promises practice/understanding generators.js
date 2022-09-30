// * will turn a function to a generator

const fibonacci = function *(len, nums = [0,1]) {
    let num1 = nums[0],
        num2 = nums[0],
        next,
        count = 2;

    while (count < len) {
        next = num1 + num2;
        num1 = num2;
        num2 = next;
        nums.push(next);
        count++;
        yield nums;
    }

    return nums;
};

let fib = fibonacci(100);

// generators go along with .next(), for instance fib.next() would display a following result