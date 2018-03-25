import { Injectable } from '@angular/core';

const COMMON_MESSEGE = {
  WARMING: '경고 합니다',
  CONFIRM: '확인 완료했습니다.',
  SUCCESS: '성공 했습니다.',
  FAIL: '실패 했습니다.',
  CANCEL: '취소했습니다',
  REQUIRE: '필요로 합니다.'
};

@Injectable()
export class CommomMessegeService {
  constructor() {} 

  getMessege(mesesgeType: string, prefix: string = '') {
    return `${prefix}${COMMON_MESSEGE[mesesgeType]}`;
  }
}
