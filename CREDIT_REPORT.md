# SERVICE
Prequalification Credit Report

# API DOCS
https://developer.experian.com/products/us/prequalification-credit-report/prequalification-credit-report-api-docs#/Consumer%20Services/credit-report

http://www.experian.com/assets/access/arf8-glossary.pdf

# STATUS CODE DOCS
https://www.700credit.com/wp-content/uploads/2018/03/Equifax-how-to-read-the-credit-report.pdf
https://singlefamily.fanniemae.com/media/15086/display

# INFORMATIONAL MESSAGES
"messageNumber":          "84"
"messageNumberDetailed":  "0084"
"messageText":            "SSN MATCHES"

# PAYLOAD NOTES
## Risk Model
### API DOC
riskModel {
  evaluation                    // (String) Sign of risk score.
  modelIndicator                // (String) default: V4 Indicates which model is being returned.
  score                         // (String) Present when RiskModel is requested on input or via subcode.
  scorePercentile               // (String) Nation Score Percentile.
  scoreFactors  array(
                  // Score Factor Codes (Upto 5 items can be returned)
                  importance  // (String) The importance of this score factor code
                  code        // (String) Score Factor Code
                )
}

### PAYLOAD SAMPLE
{
  "evaluation":         "P"
  "modelIndicator":     "F"
  "score":              "0561"
  "scoreFactors":       array(
    0 => {
      "importance":   "1"
      "code":         "38"          //--- CreditCodes::risk_factor_codes($ref_code)
    },
    1 => {
      "importance":   "2"
      "code":         "10"          //--- CreditCodes::risk_factor_codes($ref_code)
    }
  )
}

## Public Record
### API DOC
publicRecord {
  adjustmentPercent             // (String) For BK Chapter 13 Only.
  amount                        // (String) default: 0 Full rounded dollar amount or rounded amount.
  bankruptcyAssetAmount         // (String) default: 0 Full dollar amount for Bankruptcies.
  bankruptcyVoluntaryIndicator  // (String) Bankruptcy Voluntary Indicator
  bookPageSequence              // (String) Book, page and sequence number.
  consumerComment               // (String) Public Record Comment Text (Free Form).
  courtCode                     // (String) default: 0 Seven-digit code unique to each court.
  courtName                     // (String) default: BANKRUPTCY COURT Court name
  disputeFlag                   // (String) Indicates a dispute.
  ecoa                          // (String)
  evaluation                    // (String) N (constant) = negative
  filingDate                    // (String) default: 62094.0 Original filing date Format = MMDDCCYY.
  plaintiffName                 // (String) Plaintiff Name
  referenceNumber               // (String) Contains docket number or certificate ID.
  repaymentPercent              // (String) For BK Chapter 13 Only
  status                        // (String) Public Record Status Codes.
  statusDate                    // (String) Date of court action associated with status. Format = MMDDCCYY.
}

### PAYLOAD SAMPLE
{
  "amount":                   "00038874"
  "bankruptcyAssetAmount":    "00021635"
  "courtCode":                "3000000"
  "courtName":                "US BKPT CT AR FAYETTEV"
  "ecoa":                     "2"                       //--- CreditCodes::ecoa_codes($ref_code)
  "evaluation":               "N"
  "filingDate":               "09052016"
  "referenceNumber":          "01-1093F"
  "status":                   "13"                      //--- CreditCodes::public_record_status($ref_code)
  "statusDate":               "09052016"
}

## Tradeline
### API DOC
tradeline {
  accountType                   // (String) Indicates Type of Account.
  amount1                       // (String) Full dollar amount.
  amount1Qualifier              // (String) Amount Type.
  amount2                       // (String) Full dollar amount.
  amount2Qualifier              // (String) Amount Type.
  amountBalloonPayment          // (String) Full dollar amount
  amountPastDue                 // (String) Full dollar amount
  balanceAmount                 // (String) Full dollar amount
  balanceDate                   // (String) Date account was last updated. Format = MMDDCCYY.
  bankruptcyChapterNumber       // (String) Bankruptcy Chapter Number.
  consumerComment               // (String) Free Form Text from consumer.
  consumerDisputeFlag           // (String) Indicates if trade is disputed by consumer.
  datePaymentDue                // (String) Date balloon payment due. Format = MMDDCCYY.
  delinquencies30Days           // (String) 30 to 59 day delinquencies
  delinquencies60Days           // (String) 60 to 89 day delinquencies
  delinquencies90to180Days      // (String) 90 to 180 day delinquencies
  derogCounter                  // (String) Number of months the account seriously derogatory.
  ecoa                          // (String) Attribute code.
  evaluation                    // (String) Indicates if additional review is required.
  kob                           // (String) default: YC Kind of business code of subscriber
  lastPaymentDate               // (String) Date of last payment. Format = MMDDCCYY.
  maxDelinquencyDate            // (String) Date of worst payment code beyond the monthly payment profile
  monthlyPaymentAmount          // (String) Full dollar amount.
  monthlyPaymentType            // (String) 
  monthsHistory                 // (String) Number of Months Reviewed
  openDate                      // (String) Date account opened. Format = MMDDCCYY.
  openOrClosed                  // (String) Indicates if trade is Open or Closed
  originalCreditorName          // (String) Name of original creditor if a collection account.
  paymentHistory                // (String) 84 Month payment history when requested. Otherwise 25.
  revolvingOrInstallment        // (String) 
  soldToName                    // (String) Name of the creditor to whom the account was sold.
  specialComment                // (String) Special Comments.
  status                        // (String) Account Condition/Payment Status Codes.
  statusDate                    // (String) Account Status Date. Format = MMDDCCYY.
  subscriberCode                // (String) Subscriber number that reported tradeline.
  subscriberName                // (String) Name of Subscriber
  terms                         // (String) Payment terms for the Account.
  "enhancedPaymentData": {
    "actualPaymentAmount": "string",
    "chargeoffAmount": "string",
    "ciiCode": "string",
    "complianceCondition": "string",
    "creditLimitAmount": "string",
    "enhancedAccountCondition": "string",
    "enhancedAccountType": "string",
    "enhancedPaymentHistory84": "string",
    "enhancedPaymentStatus": "string",
    "enhancedSpecialComment": "string",
    "enhancedTerms": "string",
    "enhancedTermsFrequency": "string",
    "firstDelinquencyDate": "string",
    "highBalanceAmount": "string",
    "maxDelinquencyCode": "string",
    "mortgageId": "string",
    "originalCreditorClassificationCode": "string",
    "originalLoanAmount": "string",
    "paymentLevelDate": "string",
    "purchasedPortfolioFromName": "string",
    "secondDelinquencyDate": "string",
    "secondaryAgencyCode": "string",
    "secondaryAgencyId": "string",
    "specialPaymentAmount": "string",
    "specialPaymentCode": "string",
    "specialPaymentDate": "string"
  }
}

### PAYLOAD SAMPLE
{
  "accountType":                "18"              //--- CreditCodes::tradeline_type($ref_code)
  "amount1":                    "00000700"
  "amount1Qualifier":           "L"
  "amount2":                    "00000854"
  "amount2Qualifier":           "C"
  "amountPastDue":              "00000854"
  "balanceAmount":              "00000854"
  "balanceDate":                "10122020"
  "delinquencies30Days":        "01"
  "delinquencies60Days":        "01"
  "delinquencies90to180Days":   "01"
  "derogCounter":               "38"
  "ecoa":                       "1"               //--- CreditCodes::ecoa_codes($ref_code)
  "evaluation":                 "N"
  "kob":                        "BC"              //--- CreditCodes::tradeline_businesscode($ref_code)
  "lastPaymentDate":            "05282016"
  "maxDelinquencyDate":         "09012018"
  "monthsHistory":              "67"
  "openDate":                   "03282015"
  "openOrClosed":               "C"
  "paymentHistory":             "9999999999"
  "revolvingOrInstallment":     "R"
  "status":                     "97"              //--- CreditCodes::tradeline_status($ref_code)
  "statusDate":                 "11012016"
  "subscriberCode":             "0000000"
  "subscriberName":             "FURNISHER"
  "terms":                      "REV"
}