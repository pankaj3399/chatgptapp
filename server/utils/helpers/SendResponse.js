const sendResponse = (res, data) => {
  const responseData = {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message || null,
    meta: data.meta || null || undefined,
    data: data.data || null,
    newMessage: data.newMessage || null || undefined,
  };

  res.status(data.statusCode).json(responseData);
};

export default sendResponse;
