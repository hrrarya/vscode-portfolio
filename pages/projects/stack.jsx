const Stack = ({ stack }) => {
  if (!Array.isArray(stack) || stack.length < 1) return null;
  return stack.map((item, index) => (
    <span
      key={index}
      className="px-2 py-1 mr-2 mb-2 text-xs border border-pink-300 rounded-xl"
    >
      {item?.name}
    </span>
  ));
};

export default Stack;
