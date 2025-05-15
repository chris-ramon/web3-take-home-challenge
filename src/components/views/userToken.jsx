import { useToken } from 'wagmi';

function UserToken({ address }) {
  const result = useToken({
    address,
  });

  return (
    <p className="text-[#EEEEEE] font-regular md:text-[18px] sm:text-[14px] text-[13px] line leading-normal mt-[18px]">
      {result}
    </p>
  );
}

export default UserToken;
