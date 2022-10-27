import reactDom from 'react-dom';

interface PotalProps {
  children: React.ReactNode;
}

const GlobalPotal = ({ children }: PotalProps) => {
  const element = document.getElementById('modal');

  return reactDom.createPortal(children, element as HTMLElement);
};

export default GlobalPotal;
