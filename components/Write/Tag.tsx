import { useCallback, useState } from 'react';

interface TagProps {
  tag: string;
  onDelete: (tag: string) => void;
}

const Tag: React.FC<TagProps> = ({ tag, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = useCallback(() => setIsHovered(true), []);
  const handleMouseOut = useCallback(() => setIsHovered(false), []);
  const color = isHovered ? 'red' : 'blue';

  return (
    <div
      style={{ color: color, cursor: 'pointer' }}
      onClick={() => onDelete(tag)}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      #{tag}
    </div>
  );
};

export default Tag;