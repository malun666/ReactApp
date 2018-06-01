import * as stuActions from './stuAction';

export function editAppTitle(title) {
  return {type: 'EDIT_APP_TITLE', data: title};
};

export const stu = stuActions;