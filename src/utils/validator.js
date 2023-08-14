import { object, string } from 'yup';
import store from '../store/store';

export default (data) => {
  const dataSchema = object({
    url: string().trim().url().required().notOneOf(store.feeds, 'Данный URL уже присутствует в фидах'),
  });
  return dataSchema.validate(data);
};
