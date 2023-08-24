export default {
  compose: {
    unsanitizedObj: {
      err: {
        config: {
          url: 'localhost',
          method: 'POST',
          headers: {
            key: 'value'
          }
        },
        e: {
          name: 'exceptionName',
          message: 'exceptionMessage'
        }
      },
      data: {
        someKey: 'someValue',
        someObj: {
          someKey1: 'someValue1',
          someKey2: 'someValue2'
        }
      }
    },
    sanitizedObj: {
      data: {
        someKey: 'someValue',
        someObj: {
          someKey1: 'someValue1',
          someKey2: 'someValue2'
        }
      },
      err: {
        config: {
          url: 'localhost',
          method: 'POST',
          additional: {
            headers: {
              key: 'value'
            }
          }
        },
        name: 'exceptionName',
        message: 'exceptionMessage'
      }
    },
    stringifiedSanitizedObj:
      '{"data":{"someKey":"someValue","someObj":"[Object]"},"err":{"config":"[Object]","message":"exceptionMessage","name":"exceptionName"}}',
    msg: 'testData.msg',
    indentationSpacing: 0
  },
  stringify: {
    obj: {
      bigint: 999_999_999_999_999_999n,
      data: {
        err: {
          config: {
            url: 'localhost',
            method: 'POST',
            headers: {
              key: 'value'
            }
          },
          e: {
            name: 'exceptionName',
            message: 'exceptionMessage'
          }
        },
        data: {
          someKey: 'someValue',
          someObj: {
            someKey1: 'someValue1',
            someKey2: 'someValue2'
          }
        }
      }
    },
    expectedBigintFalse:
      '{\n  "data": {\n    "err": {\n      "config": {\n        "url": "localhost",\n        "method": "POST",\n        "headers": "[Object]"\n      },\n      "e": {\n        "name": "exceptionName",\n        "message": "exceptionMessage"\n      }\n    },\n    "data": {\n      "someKey": "someValue",\n      "someObj": {\n        "someKey1": "someValue1",\n        "someKey2": "someValue2"\n      }\n    }\n  }\n}',
    expectedBigintFalseCustomMaximumDepth:
      '{\n  "data": {\n    "data": {\n      "someKey": "someValue",\n      "someObj": {\n        "someKey1": "someValue1",\n        "someKey2": "someValue2"\n      }\n    },\n    "err": {\n      "config": {\n        "headers": "[Object]",\n        "method": "POST",\n        "url": "localhost"\n      },\n      "e": {\n        "message": "exceptionMessage",\n        "name": "exceptionName"\n      }\n    }\n  }\n}',
    expectedBigintTrue:
      '{\n  "bigint": 999999999999999999,\n  "data": {\n    "data": {\n      "someKey": "someValue",\n      "someObj": {\n        "someKey1": "someValue1",\n        "someKey2": "someValue2"\n      }\n    },\n    "err": {\n      "config": {\n        "headers": {\n          "key": "value"\n        },\n        "method": "POST",\n        "url": "localhost"\n      },\n      "e": {\n        "message": "exceptionMessage",\n        "name": "exceptionName"\n      }\n    }\n  }\n}',
    expectedBigintTrueCustomMaximumDepth:
      '{\n  "bigint": 999999999999999999,\n  "data": {\n    "err": {\n      "config": {\n        "url": "localhost",\n        "method": "POST",\n        "...": "1 item not stringified"\n      },\n      "e": {\n        "name": "exceptionName",\n        "message": "exceptionMessage"\n      }\n    },\n    "data": {\n      "someKey": "someValue",\n      "someObj": {\n        "someKey1": "someValue1",\n        "someKey2": "someValue2"\n      }\n    }\n  }\n}'
  },
  audit: {
    event: {
      positive: {
        withError: {
          err: {
            config: {
              url: 'localhost',
              method: 'POST',
              headers: {
                key: 'value'
              }
            },
            e: {
              name: 'exceptionName',
              message: 'exceptionMessage'
            }
          },
          data: {
            someKey: 'someValue',
            someObj: {
              someKey1: 'someValue1',
              someKey2: 'someValue2'
            }
          }
        },
        withoutError: {
          data: {
            someKey: 'someValue',
            someObj: {
              someKey1: 'someValue1',
              someKey2: 'someValue2'
            }
          }
        }
      }
    },
    expected: {
      tests: {
        1: {
          data: {
            someKey: 'someValue',
            someObj: { someKey1: 'someValue1', someKey2: 'someValue2' }
          },
          err: {
            config: {
              additional: { headers: { key: 'value' } },
              method: 'POST',
              url: 'localhost'
            },
            message: 'exceptionMessage',
            name: 'exceptionName'
          }
        },
        2: {
          data: {
            someKey: 'someValue',
            someObj: { someKey1: 'someValue1', someKey2: 'someValue2' }
          }
        }
      }
    }
  }
};
