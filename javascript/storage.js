const addDatatolocalstorage = (tableName, data) => {
  console.log(tableName, data, "dataaaaa");
  localStorage.setItem(tableName, JSON.stringify(data));
  console.log("Hiiii");
};
// const updateDatatolocalstorage(tableName,id,data){

// }
// const deleteData(table,id){

// }
