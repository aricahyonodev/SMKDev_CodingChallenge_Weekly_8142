function checkCats(dataTuti, dataNining) {
  /**
   * Tuti knows that the owner of the first cat and the last two cats is a dog. 
   * so delete the data in the array and create a new storage.
   */
  const correctDataTuti = dataTuti.slice(1, 3);
  return [...correctDataTuti, ...dataNining];
}

function printDataCats(indexCat, age) {
    const adultPeriod = age >= 3 ? "adalah kucing Dewasa" : "masih anak anak";
    console.log(
      `Kucing nomor ${indexCat + 1} ${adultPeriod}, dan berusia ${age} tahun`
    );
}

// Test Data 1
console.log("\n============ Test Data 1 ============");
const dataTuti = [3, 5, 2, 12, 27];
const dataNining = [4, 1, 15, 8, 3];
checkCats(dataTuti, dataNining).forEach((data, i) => printDataCats(i, data));


// Test Data 2
console.log("\n============ Test Data 2 ============");
const dataTuti2 = [9, 16, 6, 8, 3];
const dataNining2 = [10, 5, 6, 1, 4];
checkCats(dataTuti2, dataNining2).forEach((data, i) => printDataCats(i, data));