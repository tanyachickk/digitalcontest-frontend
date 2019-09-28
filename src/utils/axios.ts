import camelCase from 'camelcase-keys-deep';
import snakeCase from 'snakecase-keys';
import qs from 'qs';

export function snakeCaseRequest(data, headersReadOnly) {
  const transformRequestBy = handleRequestData(data, headersReadOnly);
  return transformRequestBy((requestData) => {
    const scData = snakeCase(requestData, { deep: true });
    return scData;
  });
}

export function snakeCaseParams(params) {
  return qs.stringify(snakeCase(params, { deep: true }), { indices: false });
}

export function camelCaseResponse(data) {
  const transformResponseBy = handleResponseData(data);
  return transformResponseBy((respData) => camelCase(respData));
}

export function handleRequestData(data: any, _) {
  return (cb: (data: any) => any) => {
    if (typeof data === 'string') {
      return data;
    }
    if (!data) {
      return data;
    }
    if (data instanceof FormData) {
      return data;
    }
    return JSON.stringify(cb(data));
  };
}
export function handleResponseData(data: any) {
  return (cb: (data: any) => any) => {
    if (typeof data === 'string') {
      return cb(JSON.parse(data));
    }
    if (!data) {
      return data;
    }
    return cb(data);
  };
}
