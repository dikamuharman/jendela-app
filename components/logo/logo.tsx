import Image from 'next/image';
import JendelaLogo from '../../assets/logo.png';

const JLogo = ({ withTitle = false }: { withTitle?: boolean }) => {
  return (
    <div className="flex flex-row items-center">
      <Image src={JendelaLogo} width={44} height={44} alt="Logo" />
      {withTitle && (
        <div className="flex flex-col items-start ml-2">
          <p className="text-base inline-flex flex-col font-medium text-netural-90 mb-0 after:content-[''] after:w-full after:h-[2px] after:bg-primary-50 after:my-0">
            Jendela
          </p>
          <span className="text-[14px] text-netural-30 mt-0">
            know your career way
          </span>
        </div>
      )}
    </div>
  );
};

export default JLogo;
