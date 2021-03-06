import  { requestGet, requestPost, requestDelete } from '@/utils/request.js';
import SERVER from './drf.js';

export const notebookApi = {
  
  // 알림장 생성(완료)
  createNotebook: (data, headers) => {
    return requestPost(SERVER.URL + SERVER.ROUTES.notebook, data, headers);
  },
  
  // 알림장 전체 조회(완료)
  getNotebook: (data, headers) => {
    return requestGet(SERVER.URL + SERVER.ROUTES.notebook + `/${data.type}` +`?userId=${data.userId}` + `&pageNum=${data.pageNum}`, headers);
  },

  getSearchNotebook: (data, headers) => {
    return requestGet(SERVER.URL + SERVER.ROUTES.notebook + '/search' +`?userId=${data.userId}` + `&pageNum=${data.pageNum}` + `&searchParam=${data.searchParam}`, headers);
  },
  
  // 알림장 상세 조회(완료)
  getNotebookDetail: (data, headers) => {
    return requestGet(SERVER.URL + SERVER.ROUTES.notebook + `/${data.Id}`, headers);
  },

  // 알림장 수정
  updateNotebook: (data, headers) => {
    return requestPost(SERVER.URL + SERVER.ROUTES.notebook + `/${data.noteId}`, data, headers);
  },

  // 알림장 삭제(완료)
  deleteNotebook: (data, headers ) => {
    return requestDelete(SERVER.URL + SERVER.ROUTES.notebook + `?noteId=${data.notebookId}`, headers);
  },

  getParent: (data, headers) => {
    return requestGet(SERVER.URL + SERVER.ROUTES.notebook + '/list' +`?userId=${data.userId}`, headers);
  },


};

export default notebookApi;