var maxArea = function (height) {
    let Area;
    let maxArea = 0;
    let i = 0;
    let j = height.length - 1;
    while (i < j) {
        if (height[i] < height[j]) {
            Area = (height[i] * (j - i));
        }
        if (height[i] > height[j]) {
            Area = (height[j] * (j - i));
        }
        if (height[i] === height[j]) {
            Area = (height[j] * (j - i));
        }
        if (Area > maxArea) {
            maxArea = Area;
        }
        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }
    return maxArea;
};