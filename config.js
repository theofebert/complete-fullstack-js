// Steps 2.1_C
const env = process.env;

// Steps 2.1_B &then Steps 2.1_E
// console.log('config');

// Steps 2.1_I
export const nodeEnv = env.NODE_ENV || 'development';

// Steps 2.1_L
export const logStars = function (message) {
  console.info('**********');
  console.info(message);
  console.info('**********');
};

// Steps 2.1_H
export default {
  port: env.PORT || 8080,
};
