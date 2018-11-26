const mssql = require("../../mssql");
const TYPES = require("tedious").TYPES;
const toCamel = require("./toCamel.js");
const getAll = (pageIndex, pageSize) => {
  return mssql
    .executeProc("Industry_SelectAll", sqlRequest => {
      sqlRequest.addParameter("pageIndex", TYPES.Int, pageIndex);
      sqlRequest.addParameter("pageSize", TYPES.Int, pageSize);
    })
    .then(response => {
      const totalCount =
        (response.resultSets &&
          response.resultSets[0] &&
          response.resultSets[0][0] &&
          response.resultSets[0][0].TotalRows) ||
        0;
      const totalPages = Math.ceil(totalCount / pageSize);
      const item = {
        pageItems: response.resultSets[0],
        pageIndex: pageIndex,
        pageSize: pageSize,
        totalCount: totalCount,
        totalPages: totalPages
      };
      const convertToCamel = toCamel(item);
      return convertToCamel;
    });
};
const getById = id => {
  return mssql
    .executeProc("Industry_SelectById", sqlRequest => {
      sqlRequest.addParameter("Id", TYPES.Int, id);
    })
    .then(response => {
      const convertToCamel = toCamel(response.resultSets[0]);
      return convertToCamel;
    });
};
const post = item => {
  return mssql
    .executeProc("Industry_Insert", sqlRequest => {
      sqlRequest.addParameter("IconUrl", TYPES.NVarChar, item.iconUrl, {
        length: 400
      });
      sqlRequest.addParameter("Name", TYPES.NVarChar, item.name, {
        length: 50
      });
      sqlRequest.addParameter("Description", TYPES.NVarChar, item.description, {
        length: 250
      });
      sqlRequest.addParameter("CatagoryId", TYPES.Int, item.catagoryId);
      sqlRequest.addOutputParameter("Id", TYPES.Int, null);
    })
    .then(response => {
      return response.outputParameters;
      console.log(response.outputParameters);
    });
};
const put = item => {
  console.log(item);
  return mssql
    .executeProc("Industry_Update", sqlRequest => {
      sqlRequest.addParameter("IconUrl", TYPES.NVarChar, item.iconUrl, {
        length: 400
      });
      sqlRequest.addParameter("Name", TYPES.NVarChar, item.name, {
        length: 50
      });
      sqlRequest.addParameter("Description", TYPES.NVarChar, item.description, {
        length: 250
      });
      sqlRequest.addParameter("CatagoryId", TYPES.Int, item.catagoryId);
      sqlRequest.addOutputParameter("Id", TYPES.Int, item.id);
    })
    .then(response => {
      return true;
    });
};
const del = id => {
  return mssql.executeProc("Industry_Delete", sqlRequest => {
    sqlRequest.addParameter("Id", TYPES.Int, id);
  });
};

module.exports = {
  getAll,
  getById,
  post,
  put,
  del
};
