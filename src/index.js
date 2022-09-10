const find_Index = (arr, target) => {
  const arr1 = [...arr];
  const arr2 = [];
  const arr3 = [];
  const arr4 = [];
  for (let i = 0; i < arr.length; i++) {
    const result = arr1.map((a) => {
      if (a + arr[i] == target) return a;
    });
    arr2.push(result);
  }

  // console.log(arr2);
  for (let j = 0; j < arr2.length; j++) {
    // console.log(arr2[j]);
    for (let f = 0; f < arr2[j].length; f++) {
      // console.log(arr2[j][f])

      if (arr2[j][f] !== undefined) {
        arr3.push(arr2[j][f]);
      }
    }
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr[i] === arr3[0]) {
      arr4.push(i);
    }
    if (arr[i] === target - arr3[0]) {
      arr4.push(i);
    }
  }
  console.log(arr4);
};

find_Index([1, 2, 4, 6, 7], 7);
