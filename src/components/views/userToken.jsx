import { useEffect } from "react";
import { useBalance } from "wagmi";

function UserToken({ address }) {
  const { data } = useBalance({
    address: address,
  });

  return (
    <div>
      <p className="text-[#EEEEEE] font-regular md:text-[18px] sm:text-[14px] text-[13px] line leading-normal mt-[18px]">
        {address}: {data?.symbol} {data?.formatted}
      </p>
    </div>
  );
}

export default UserToken;
