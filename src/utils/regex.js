
export const key = /^[a-z0-9]{24}$/;

export const uuid = /^(\w{8})-(\w{4})-(\w{4})-(\w{4})-(\w{12})$/;

// eslint-disable-next-line
export const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const password = /^.{6,20}$/;
