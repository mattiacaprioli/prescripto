import PropTypes from 'prop-types';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = ({ clientSecret, appointment, onClose }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      console.error(result.error.message);
      alert("Payment failed: " + result.error.message);
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        alert("Payment succeeded!");
        onClose();
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-96">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
          Complete Your Payment
        </h2>

        {/* Mostra l'importo se disponibile */}
        {appointment?.amount && (
          <p className="text-center text-gray-700 mb-2">
            Amount to Pay: <span className="font-bold">${appointment.amount}</span>
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Card Input */}
          <div className="border border-gray-300 p-3 rounded-lg">
            <CardElement options={{ hidePostalCode: true }} className="text-gray-700" />
          </div>

          {/* Payment & Cancel Buttons */}
          <div className="flex items-center justify-between space-x-2">
            <button 
              type="submit" 
              disabled={!stripe} 
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 disabled:bg-gray-400"
            >
              Pay Now
            </button>
            <button 
              type="button" 
              onClick={onClose} 
              className="w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ✅ Definizione delle PropTypes per evitare warning
PaymentForm.propTypes = {
  clientSecret: PropTypes.string.isRequired,
  appointment: PropTypes.shape({
    amount: PropTypes.number,  // L'importo deve essere un numero (può essere opzionale)
  }),
  onClose: PropTypes.func.isRequired,
};

export default PaymentForm;
