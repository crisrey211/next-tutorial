import { type Todo as Todotype } from '../types';

type Props = Todotype;

export const Todo: React.FC<Props> = ({ id, title, completed }) => {
  return (
    <div className="view">
      <input
        className="toogle"
        type={'checkbox'}
        checked={completed}
        onChange={() => {}}
      />
      <label>{title}</label>
      <button className="destroy" onClick={() => {}} />
    </div>
  );
};
