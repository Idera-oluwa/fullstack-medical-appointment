import React from "react";
import Image from "next/image";

const SymptomTab = () => {
  return (
    <section className="w-full grid grid-cols-4 mt-3 px-2 gap-2">
      <div className="bg-white rounded-[10px] h-[106px] p-1 shadow-small flex flex-col items-center">
        <Image src="/Images/symptom-1.svg" width={73} height={73} />
        <p className="mt-2 text-small overflow-hidden overflow-ellipsis line-clamp-1 w-full text-center">
          Gynaecology
        </p>
      </div>
      <div className="bg-white rounded-[10px] h-[106px] p-1 shadow-small flex flex-col items-center">
        <Image src="/Images/symptom-2.svg" width={73} height={73} />
        <p className="mt-2 text-small overflow-hidden overflow-ellipsis line-clamp-1 w-full text-center">
          Sexology
        </p>
      </div>
      <div className="bg-white rounded-[10px] h-[106px] p-1 shadow-small flex flex-col items-center">
        <Image src="/Images/symptom-3.svg" width={73} height={73} />
        <p className="mt-2 text-small overflow-hidden overflow-ellipsis line-clamp-1 w-full text-center">
          General physician
        </p>
      </div>
      <div className="bg-white rounded-[10px] h-[106px] p-1 shadow-small flex flex-col items-center">
        <Image src="/Images/symptom-4.svg" width={73} height={73} />
        <p className="mt-2 text-small overflow-hidden overflow-ellipsis line-clamp-1 w-full text-center">
          Dermatology
        </p>
      </div>
      <div className="bg-white rounded-[10px] h-[106px] p-1 shadow-small flex flex-col items-center">
        <Image src="/Images/symptom-5.svg" width={73} height={73} />
        <p className="mt-2 text-small overflow-hidden overflow-ellipsis line-clamp-1 w-full text-center">
          Psychiatry
        </p>
      </div>
      <div className="bg-white rounded-[10px] h-[106px] p-1 shadow-small flex flex-col items-center">
        <Image src="/Images/symptom-6.svg" width={73} height={73} />
        <p className="mt-2 text-small overflow-hidden overflow-ellipsis line-clamp-1 w-full text-center ">
          Stomach and digestion
        </p>
      </div>
      <div className="bg-white rounded-[10px] h-[106px] p-1 shadow-small flex flex-col items-center">
        <Image src="/Images/symptom-7.svg" width={73} height={73} />
        <p className="mt-2 text-small overflow-hidden overflow-ellipsis line-clamp-1 w-full text-center ">
          Pediatrics
        </p>
      </div>
      <div className="bg-white rounded-[10px] h-[106px] p-1 shadow-small flex flex-col items-center">
        <Image src="/Images/symptom-8.svg" width={73} height={73} />
        <p className="mt-2 text-small overflow-hidden overflow-ellipsis line-clamp-1 w-full text-center ">
          Urology
        </p>
      </div>
    </section>
  );
};

export default SymptomTab;
