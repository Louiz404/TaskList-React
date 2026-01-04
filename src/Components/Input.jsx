import PropTypes from "prop-types";

function Input(props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className="w-full bg-slate-50 border border-slate-200 text-slate-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder:text-slate-400"
      value={props.value}
      onChange={props.onChange}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
