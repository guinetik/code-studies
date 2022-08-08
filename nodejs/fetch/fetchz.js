import fetch from "node-fetch";
import * as fs from "fs";
/**
 * This pseudo-crawler thing to download pictures from a bucket following a sequetial date order
 * Usage node fetchz.js [bucket_url] [bucket_domain] [starting_timestamp]
 * Example `node fetchz.js http://s3.storage.bucket.com/$domain/$timestamp.jpg DOMAIN_NAME 20220101000000`
 * @param {string} bucket_url - the url of the bucket with $domain and $timestamp placeholders
 * @param {string} bucket_domain - the domain of the bucket, usually a directory or a sequence of directories ("/pictures" or "/pictures/family/")
 * @param {string} starting_timestamp - the timestamp of the first picture to download in YYYYMMDDHHMMSS format
 */
const fetchz = (bucket_url, bucket_domain, starting_timestamp) => {
  const addOneSecond = (date) => {
    if (date) {
      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDate();
      let hour = date.getHours();
      let minute = date.getMinutes();
      let second = date.getSeconds();
      return new Date(year, month, day, hour, minute, second + 1);
    }
    throw new Error("date is null");
  };
  const convertDateToString = (date) => {
    return date.YYYYMMDDHHMMSS();
  };
  const getPic = async (lastDate, domain) => {
    console.log(lastDate.toLocaleString());
    let controller = new AbortController();
    const signal = controller.signal;
    const self = this;
    setTimeout(() => {
      if (controller) controller.abort();
    }, 2000);
    const date = addOneSecond(lastDate);
    const timestamp = convertDateToString(date);
    const baseURL = PARAM_URL.replace("$domain", domain).replace(
      "$timestamp",
      timestamp
    );
    console.log("downloading", baseURL);
    const imgBlob = await fetch(baseURL, {
      headers: {
        accept: "*/*",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      method: "GET",
      signal: signal,
    });
    controller = false;
    const buffer = await imgBlob.buffer();
    if (buffer.length != 32862) {
      console.log("saving...");
      await fs.writeFileSync(`./pics/${domain}-ph${timestamp}.jpg`, buffer);
      return date;
    } else {
      return date;
    }
  };
  const crawler = async () => {
    try {
      if (!currentDate)
        currentDate = await getPic(firstDate, PARAM_BUCKET_DOMAIN);
      while (currentDate.getTime() < EXECUTION_START_TIME) {
        currentDate = await getPic(currentDate, PARAM_BUCKET_DOMAIN);
      }
    } catch (error) {
      console.log("ERROR", error.message, "RESTARTING...");
      setTimeout(crawler, 5000);
    }
  };
  //
  //
  //
  //
  //
  crawler();
};
//
const myArgs = process.argv.slice(2);
console.log("myArgs: ", myArgs);
//
const PARAM_URL = myArgs[0];
const PARAM_BUCKET_DOMAIN = myArgs[1];
const EXECUTION_START_TIME = new Date().getTime();
let currentDate = false;
//
Object.defineProperty(Date.prototype, "YYYYMMDDHHMMSS", {
  value: function () {
    function pad2(n) {
      // always returns a string
      return (n < 10 ? "0" : "") + n;
    }

    return (
      this.getFullYear() +
      pad2(this.getMonth() + 1) +
      pad2(this.getDate()) +
      pad2(this.getHours()) +
      pad2(this.getMinutes()) +
      pad2(this.getSeconds())
    );
  },
});
//
const convertStringToDate = (date) => {
  let year = date.substring(0, 4);
  let month = date.substring(4, 6);
  let day = date.substring(6, 8);
  let hour = date.substring(8, 10);
  let minute = date.substring(10, 12);
  let second = date.substring(12, 14);
  return new Date(year, month - 1, day, hour, minute, second);
};
//20170716212642
//20171017172958 --last
//20171017163925 -- original
const firstDate = convertStringToDate(myArgs[2]);
fetchz(PARAM_URL, PARAM_BUCKET_DOMAIN, firstDate);
