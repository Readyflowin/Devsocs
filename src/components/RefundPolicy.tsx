import React from 'react';
import { ShieldAlert, CheckCircle, Mail, ArrowLeft, FileX } from 'lucide-react';
import { Link } from 'react-router-dom';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
            <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Refund & Cancellation Policy</h1>
            <p className="mt-4 text-lg text-slate-600">
                Transparent. Fair. No hidden clauses.
            </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-200">
            
            {/* The "Digital Product" Warning */}
            <div className="bg-orange-50 p-6 border-b border-orange-100 flex gap-4 items-start">
                <ShieldAlert className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                    <h3 className="text-lg font-bold text-orange-800 mb-2">General Policy: Digital Products</h3>
                    <p className="text-sm text-orange-700 leading-relaxed">
                        Since "DevSocs Verified Leads Bundle" is a downloadable digital asset (Excel Sheet + Code Snippets), 
                        <strong> returns are not possible</strong> once the file has been accessed or downloaded. 
                        Generally, all sales are considered final.
                    </p>
                </div>
            </div>

            <div className="p-8 space-y-8">
                
                {/* Section: When do we offer a refund? */}
                <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        When is a refund applicable?
                    </h2>
                    <p className="text-slate-600 mb-4">
                        We are developers, not scammers. We will issue a <strong>100% Refund</strong> in the following two specific cases:
                    </p>
                    
                    <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-4">
                        {/* Condition 1 */}
                        <div className="flex gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-700 font-bold text-sm">1</div>
                            <div>
                                <h4 className="font-bold text-slate-900">Data Mismatch / False Promise</h4>
                                <p className="text-sm text-slate-600 mt-1">
                                    If the downloaded Excel sheet does not contain <strong>250+ unique business leads</strong> or if the data lacks the promised details (e.g., Missing Instagram IDs/Ad Library Links), you are eligible for a refund.
                                </p>
                            </div>
                        </div>

                        {/* Condition 2 */}
                        <div className="flex gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-700 font-bold text-sm">2</div>
                            <div>
                                <h4 className="font-bold text-slate-900">Non-Delivery of Product</h4>
                                <p className="text-sm text-slate-600 mt-1">
                                    If you successfully paid, but the download link did not arrive via Email/WhatsApp, and our support team fails to manually send you the file within 24 hours of your complaint.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section: When is refund NOT applicable? */}
                <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <FileX className="w-5 h-5 text-red-500" />
                        When is a refund NOT applicable?
                    </h2>
                    <ul className="list-disc list-inside text-sm text-slate-600 space-y-2 ml-2">
                        <li>If you simply "changed your mind" after downloading the data.</li>
                        <li>If you did not use the provided scripts/methods and failed to close a client (Success depends on your execution).</li>
                        <li>If you bought it by mistake but have already accessed the Drive link.</li>
                    </ul>
                </div>

                {/* Section: Timeline & Contact */}
                <div className="border-t border-slate-100 pt-8">
                    <h3 className="font-bold text-slate-900 mb-2">Processing Timeline</h3>
                    <p className="text-sm text-slate-600 mb-6">
                        Refunds are processed within <strong>5-7 business days</strong> directly to your original payment method (UPI/Card).
                    </p>

                    <h3 className="font-bold text-slate-900 mb-2">How to Request</h3>
                    <div className="flex items-center gap-3 bg-slate-100 p-4 rounded-lg">
                        <Mail className="w-5 h-5 text-slate-500" />
                        <span className="text-slate-700 font-medium">support@devsocs.store</span>
                    </div>
                </div>

            </div>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
            <Link to="/" className="inline-flex items-center text-slate-500 hover:text-orange-600 font-medium transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </Link>
        </div>

      </div>
    </div>
  );
};

export default RefundPolicy;