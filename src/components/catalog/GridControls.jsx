import { useEffect, useState } from 'react';
import { IoMdGrid } from 'react-icons/io';

const buttonClasses = `flex w-24 h-24 border-l border-zinc-400 justify-center items-center`;

// setting a no-op
export const GridControls = ({ setPerRow = () => {} }) => {
  const [itemsPerRow, setItemsPerRow] = useState('4/row');

  // de fiecare data cand itemsPerRow se schimba,
  // ruleaza acest callback
  useEffect(() => {
    const perRow = parseInt(itemsPerRow);

    setPerRow(perRow);
  }, [itemsPerRow]);

  return (
    <ul className="flex border border-l-0 border-r-0 border-zinc-400">
      <li>
        <button
          title="One per row"
          className={`${buttonClasses} ${
            itemsPerRow === '1/row' ? 'bg-black text-white' : ''
          } `}
          onClick={() => {
            setItemsPerRow('1/row');
          }}
        >
          <IoMdGrid size="24"></IoMdGrid>
        </button>
      </li>

      <li>
        <button
          title="Two per row"
          className={`${buttonClasses} ${
            itemsPerRow === '2/row' ? 'bg-black text-white' : ''
          } `}
          onClick={() => {
            setItemsPerRow('2/row');
          }}
        >
          <IoMdGrid size="24"></IoMdGrid>
        </button>
      </li>

      <li>
        <button
          title="Four per row"
          className={`${buttonClasses} ${
            itemsPerRow === '4/row' ? 'bg-black text-white' : ''
          } `}
          onClick={() => {
            setItemsPerRow('4/row');
          }}
        >
          <IoMdGrid size="24"></IoMdGrid>
        </button>
      </li>
    </ul>
  );
};
