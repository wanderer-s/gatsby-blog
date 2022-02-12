---
emoji: ''
title: Leetcode - Two Sum
date: '2021-11-08 00:00:00'
author: whatseop
tags: leetcode
categories: Algorithm
---

## Problem

[Two Sum](https://leetcode.com/problems/two-sum/)

Given an array of integers `nums` and an integer `target`, return _indices of the two numbers such that they add up to `target`_.

You may assume that each input would have **_exactly_ one solution**, and you may not use the same element twice.

You can return the answer in any order.

정수로 이루어진 배열과, 목표 정수가 주어질 때,
둘이 합하여서 목표 정수가 되는 배열의 인덱스를 반환하라

각 입력에 정확히 하나의 해결법만 존재 한다고 가정하며, 하나의 요소를 2번 사용할 수 없다.

반환값의 순서는 중요하지 않다

### Example 1:

```js
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

### Example 2:

```js
Input: (nums = [3, 2, 4]), (target = 6);
Output: [1, 2];
```

### Example 3:

```js
Input: (nums = [3, 3]), (target = 6);
Output: [0, 1];
```

### Constraints:

- `2 <= nums.length <= 10⁴`
- `-10⁹ <= nums[i] <= 10⁹`
- `-10⁹ <= target <= 10⁹`
- **Only one valid answer exists.**

### Follow-up:

Can you come up with an algorithm that is less than `O(n²)` time complexity?

## Solution

### JavaScript

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    // 두 수의 합을 target에 맞춰야 한다면 target에서 하나의 숫자를 뺏을때
    // 나머지 숫자가 배열내에 존재하면 그 둘의 index를 반환하면 됨
    const ele = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (ele === nums[j]) {
        return [i, j];
      }
    }
  }
};
```

*Feedback은 언제나 환영입니다*🤗

```toc

```
