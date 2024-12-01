import { MomentInput } from "moment";
export declare function formatTimestampToDate(timestamp: MomentInput, formatter?: string): string;
/**
  * 将时间字符串转换成时间戳
  * @param {String} date 时间格式，例如2023-06-01 02:00:00
  * @returns {Number} 返回时间戳，例如1689264000000
  */
export declare function formatDateToTimestamp(date: MomentInput): number;
