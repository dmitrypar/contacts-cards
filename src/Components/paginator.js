export const paginator = (totalUsersCount, userPerPageCount) => {
  const pagesArr = [];
  const PageCount = totalUsersCount / userPerPageCount;
  for (let i = 1; i < PageCount + 1; i++) {
    // or i < totalPagesCount + 1
    pagesArr.push(i);
  }
  return pagesArr;
};
