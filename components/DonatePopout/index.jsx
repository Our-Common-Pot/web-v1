import { IoCopyOutline } from "react-icons/io5";

let defaultAccountDetails = {
  bankName: "Guaranty Trust Bank",
  accountNumber: "0226401882",
  accountName: "Philip Hope Ifeoluwa",
}

const DonatePopout = ({accountDetails}) => {

  if (!accountDetails) {
    accountDetails = defaultAccountDetails;
  }

  return (
    <div>
      <h2>Donate to us via:</h2>
      <div>
        <div>
          <div>
            <p>{accountDetails.accountNumber}</p>
            <button>
              <IoCopyOutline />
            </button>
          </div>
          <p>{accountDetails.bankName}</p>
          <p>{accountDetails.accountName}</p>
        </div>
      </div>
      <p>
        Thanks to your support, we&apos;re one step closer to ending hunger for Nigerian
        university students. Thank you
      </p>
      <div>
        <p>
          Note - Enquiry or receipt for confirmation of payment can be sent
          to info@ourcommonpot.org
        </p>
      </div>
    </div>
  );
}
 
export default DonatePopout;