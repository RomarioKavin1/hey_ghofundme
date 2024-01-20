import { GiftIcon } from '@heroicons/react/24/outline';
import { Card, Modal, Select } from '@hey/ui';
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
  const [goldquantity, setgoldQuantity] = useState('10');
  const [pinkquantity, setpinkQuantity] = useState('10');
  const [price, setPrice] = useState('3');
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
          <div className="flex items-center justify-center py-2">
            <Select
              label="Duration"
              options={[
                { label: '3 Months', value: '1' },
                { label: '6 Months', value: '2' },
                { label: '12 Months', value: '3' }
              ]}
            />
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
                  <span className="font-semibold">{mintTokenValidity}</span>
                </div>
                <div className="px-5">Quantity :</div>
                <div className="flex items-center justify-center py-2 pb-5">
                  <Image alt="" height={50} src={gold} width={50} />
                  <span>&nbsp; x {goldquantity} &nbsp;</span>
                  <Image alt="" height={50} src={pink} width={50} />
                  <span>&nbsp; x {pinkquantity}</span>
                </div>
                <div className="px-5 pb-3">
                  Price : <span className="font-semibold">{price} GHO</span>
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
                  Next
                </a>
              </div>
            </div>
          </>
        )}
        {step == 3 && (
          <>
            <div className="flex items-center justify-center py-2">
              <Card className="w-1/2 ">
                <div className="flex items-center justify-center py-2 text-center text-lg font-semibold text-blue-400">
                  Subscription Details
                </div>
                <div className="px-5 pb-3">
                  Token Code :{' '}
                  <span className="font-semibold">{tokenCode}</span>
                </div>
                <div className="px-5 pb-3">
                  Mint Token Validity :{' '}
                  <span className="font-semibold">{mintTokenValidity}</span>
                </div>
                <div className="px-5 pb-3">
                  Price : <span className="font-semibold">{price} GHO</span>
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
                    Confirm & Pay
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
