function getJSON(url) {
  return Promise.resolve({ x: 1, y: 2 });
}

function displayUserProfile(profile) {}

function handleProfileError(rejected) {}

getJSON("/api/user/profile").then(displayUserProfile);

/* 处理错误 */
getJSON("/api/user/profile").then(displayUserProfile, handleProfileError);

/* 错误处理方式-try-catch-finally */

function friendNotifications(profile) {}

getJSON("/api/user/profile").then(displayUserProfile).catch(handleProfileError).finally(friendNotifications);
