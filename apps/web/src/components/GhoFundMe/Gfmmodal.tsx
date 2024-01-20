import { GiftIcon } from '@heroicons/react/24/outline';
import { Card, Modal } from '@hey/ui';
import Image from 'next/image';
import React, { useState } from 'react';

import gold from '../../../public/coingold.svg';
import pink from '../../../public/coinpink.svg';
import Stepper from './Stepper';
interface GfmmodalProps {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  subscription: boolean;
}

const Gfmmodal: React.FC<GfmmodalProps> = ({
  isOpen,
  onClose,
  subscription
}) => {
  const [step, setStep] = useState(1);
  const [tokenName, setTokenName] = useState('Gab Fan Token');
  const [tokenCode, setTokenCode] = useState('$GBR');
  const [mintTokenValidity, setMintTokenValidity] = useState('3 Months');
  const [Tokenprice, setTokenprice] = useState(3);
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event: { target: { value: string } }) => {
    setSliderValue(parseInt(event.target.value, 10));
  };
  return (
    <div>
      <Modal
        icon={<GiftIcon className="text-brand-500 size-5" />}
        onClose={() => {
          onClose();
          setStep(1);
        }}
        show={isOpen}
        size="md"
        title={subscription ? 'Subscribe' : 'Your Subscription'}
      >
        <div className="flex items-center justify-center py-2">
          <Stepper step={step} />
        </div>
        {step == 1 && (
          <div className="flex items-center justify-center px-20 py-2">
            <div>
              <label
                className="mb-2 inline-block font-semibold text-blue-400"
                htmlFor="customRange1"
              >
                Tokens
                <span className="text-sm text-gray-500">
                  (Usage Rate : 1 Mint Token = 1.825 Days )
                </span>
              </label>
              <input
                className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
                id="customRange1"
                max="100" // Set the maximum value to 100
                min="0"
                onChange={handleSliderChange} // Handle slider value change
                type="range"
                value={sliderValue} // Use the state value for the current position
              />
            </div>
          </div>
        )}
        {step < 3 && (
          <>
            <div className="flex items-center justify-center py-2">
              <Card className="w-1/2">
                <div className="flex items-center justify-center py-2 text-center text-lg font-semibold text-blue-400">
                  Subscription Details
                </div>
                <div className="px-5 pb-3">
                  Token Name :{' '}
                  <span className="font-semibold">{tokenName}</span>
                </div>
                <div className="px-5 pb-3">
                  Token Code :{' '}
                  <span className="font-semibold">{tokenCode}</span>
                </div>
                <div className="px-5 pb-3">
                  Mint Token Validity :{' '}
                  <span className="font-semibold">
                    {(sliderValue * 1.825).toPrecision(5)} Days
                  </span>
                </div>
                <div className="px-5">Quantity :</div>
                <div className="flex items-center justify-center py-2 pb-5">
                  <Image alt="" height={50} src={gold} width={50} />
                  <span>&nbsp; x {sliderValue} &nbsp;</span>
                  <Image alt="" height={50} src={pink} width={50} />
                  <span>&nbsp; x {sliderValue}</span>
                </div>
                <div className="px-5 pb-3">
                  Price Per Token :{' '}
                  <span className="font-semibold">{Tokenprice} GHO</span>
                </div>
                <div className="px-5 pb-3">
                  Total Price :{' '}
                  <span className="font-semibold">
                    {Tokenprice * sliderValue} GHO
                  </span>
                </div>
              </Card>
            </div>
            <div className="flex items-center justify-center py-2">
              <div
                className="mx-3 flex h-8 w-24 items-center justify-center"
                onClick={() => (step != 3 ? setStep(step + 1) : setStep(1))}
              >
                <div className="i absolute  h-8 w-24 transform cursor-pointer items-center overflow-hidden rounded-lg border-[1px] border-blue-500 bg-transparent shadow-2xl transition duration-300 ease-out hover:bg-white" />
                <a className="pointer-events-none z-10 text-center text-sm font-semibold text-blue-500">
                  {step == 1 ? 'Next' : 'Sign'}
                </a>
              </div>
            </div>
          </>
        )}
        {step == 3 && (
          <>
            <div className="flex items-center justify-center py-2">
              <Card className="w-1/2">
                <div className="flex items-center justify-center py-2 text-center text-lg font-semibold text-blue-400">
                  Subscription Details
                </div>
                <div className="px-5 pb-3">
                  Token Name :{' '}
                  <span className="font-semibold">{tokenName}</span>
                </div>
                <div className="px-5 pb-3">
                  Token Code :{' '}
                  <span className="font-semibold">{tokenCode}</span>
                </div>
                <div className="px-5 pb-3">
                  Mint Token Validity :{' '}
                  <span className="font-semibold">
                    {(sliderValue * 1.825).toPrecision(5)} Days
                  </span>
                </div>
                <div className="px-5">Quantity :</div>
                <div className="flex items-center justify-center py-2 pb-5">
                  <Image alt="" height={50} src={gold} width={50} />
                  <span>&nbsp; x {sliderValue} &nbsp;</span>
                  <Image alt="" height={50} src={pink} width={50} />
                  <span>&nbsp; x {sliderValue}</span>
                </div>
                <div className="px-5 pb-3">
                  Price Per Token :{' '}
                  <span className="font-semibold">{Tokenprice} GHO</span>
                </div>
                <div className="px-5 pb-3">
                  Total Price :{' '}
                  <span className="font-semibold">
                    {Tokenprice * sliderValue} GHO
                  </span>
                </div>
              </Card>
            </div>
            <div className="flex items-center justify-center py-2">
              <div className="flex items-center justify-center py-2">
                <div
                  className="mx-3 flex h-8 w-24 items-center justify-center"
                  onClick={() => {
                    onClose();
                    setStep(1);
                  }}
                >
                  <div className="i absolute  h-8 w-28 transform cursor-pointer items-center overflow-hidden rounded-lg border-[1px] border-red-500 bg-transparent shadow-2xl transition duration-300 ease-out hover:bg-white" />
                  <a className="pointer-events-none z-10 text-center text-sm font-semibold text-red-500">
                    Cancel
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center py-2">
                <div
                  className="mx-3 flex h-8 w-24 items-center justify-center"
                  onClick={() => (step != 3 ? setStep(step + 1) : setStep(1))}
                >
                  <div className="i absolute  h-8 w-28 transform cursor-pointer items-center overflow-hidden rounded-lg border-[1px] border-yellow-500 bg-transparent shadow-2xl transition duration-300 ease-out hover:bg-white" />
                  <a className="pointer-events-none z-10 text-center text-sm font-semibold text-yellow-500">
                    Confirm
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Gfmmodal;
