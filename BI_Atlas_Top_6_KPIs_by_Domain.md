# BI Atlas — Top 6 KPIs by Business Domain

**Purpose:** A practical starter reference for Power BI developers. Each KPI includes its business meaning, a commonly used calculation, and an example of how it can be used in reporting.

**Important notes**
- KPI definitions can vary by organization. Confirm the agreed business definition before implementing a production report.
- Examples are illustrative, not industry benchmarks.
- DAX snippets are templates. They assume the model contains the referenced measures or columns; adapt names, relationships, date logic, and aggregation to your model.
- For percentage KPIs, clarify the reporting period and denominator. For financial KPIs, use consistent accounting definitions and currency/valuation rules.
- The six KPIs listed per domain are a practical starting set, not a universal ranking.

---

## 1. Food & Beverage (F&B) — الأغذية والمشروبات

Focus: plate cost, food waste, sales mix, and branch productivity.

### 1. Food Cost Percentage
- **Meaning:** نسبة تكلفة الطعام إلى المبيعات؛ shows how much food ingredient cost is incurred for each unit of food revenue.
- **Common formula:** `Food Cost % = Food Cost of Sales / Food Sales × 100`
- **Example:** Food cost of 30,000 against food sales of 100,000 = **30%**.
- **Business use:** Monitor recipe costs, purchasing prices, portion control, and menu pricing.
- **Power BI visual:** KPI card with target variance; trend by week and branch.
- **Watch out:** Define whether food cost is based on actual consumption, theoretical recipe cost, or inventory movement. Keep food sales and cost scope aligned.

### 2. Beverage Cost Percentage
- **Meaning:** نسبة تكلفة المشروبات إلى مبيعات المشروبات.
- **Common formula:** `Beverage Cost % = Beverage Cost of Sales / Beverage Sales × 100`
- **Example:** Beverage cost of 8,000 / beverage sales of 40,000 = **20%**.
- **Business use:** Monitor beverage margins, portion sizes, and shrinkage.
- **Power BI visual:** Branch comparison matrix and monthly trend.
- **Watch out:** Separate beverage categories where recipes, taxes, or costing methods differ materially.

### 3. Food Waste Percentage
- **Meaning:** نسبة الطعام المهدَر من إجمالي الطعام المُنتَج أو المُتاح، حسب تعريف المنشأة.
- **Common formula:** `Food Waste % = Food Waste Quantity or Cost / Defined Food Input Quantity or Cost × 100`
- **Example:** Waste valued at 1,500 out of 50,000 of food input cost = **3%**.
- **Business use:** Identify overproduction, spoilage, preparation loss, and demand-planning issues.
- **Power BI visual:** Waste trend plus category/reason matrix.
- **Watch out:** Choose one denominator and keep it consistent; distinguish avoidable waste from normal preparation loss.

### 4. Average Order Value (AOV)
- **Meaning:** متوسط قيمة الطلب الواحد.
- **Common formula:** `AOV = Net Sales / Number of Completed Orders`
- **Example:** Net sales of 60,000 across 2,000 completed orders = **30 per order**.
- **Business use:** Evaluate bundles, upselling, menu pricing, and ordering-channel performance.
- **Power BI visual:** KPI card and comparison by branch, channel, and daypart.
- **Watch out:** Define net sales, discounts, refunds, cancellations, and whether taxes/tips are included.

### 5. Sales per Labor Hour
- **Meaning:** المبيعات المحققة لكل ساعة عمل مدفوعة.
- **Common formula:** `Sales per Labor Hour = Net Sales / Paid Labor Hours`
- **Example:** Net sales of 24,000 / 600 labor hours = **40 per labor hour**.
- **Business use:** Assess staffing productivity by branch and shift.
- **Power BI visual:** Trend by daypart with branch matrix.
- **Watch out:** Compare similar operating periods and consider service quality, workload, and local wage/role mix.

### 6. Table Turnover Rate
- **Meaning:** عدد مرات استخدام الطاولة خلال فترة الخدمة.
- **Common formula:** `Table Turnover = Number of Seated Parties (or Completed Table Occupancies) / Available Tables`
- **Example:** 120 completed table occupancies / 30 tables = **4 turns** for the selected period.
- **Business use:** Understand dining-room throughput and capacity.
- **Power BI visual:** By daypart, weekday, and branch.
- **Watch out:** Define the period and occupancy event consistently; this is mainly relevant to dine-in operations.

---

## 2. Retail & E-commerce — التجزئة والتجارة الإلكترونية

Focus: conversion, basket value, product availability, and repeat purchasing.

### 1. Sales Revenue
- **Meaning:** صافي المبيعات خلال فترة محددة.
- **Common formula:** `Net Sales = Gross Sales − Discounts − Returns` (adapt to the accounting definition).
- **Example:** 150,000 gross sales − 10,000 discounts − 5,000 returns = **135,000 net sales**.
- **Business use:** Track performance by product, store, channel, and period.
- **Power BI visual:** KPI card, trend line, and product/category matrix.
- **Watch out:** Reconcile with finance; clarify taxes, shipping, cancellations, and recognition timing.

### 2. Conversion Rate
- **Meaning:** نسبة الزيارات أو الجلسات التي نتج عنها شراء.
- **Common formula:** `Conversion Rate = Orders / Sessions × 100` (or transactions / store visits for physical retail).
- **Example:** 800 orders / 20,000 sessions = **4%**.
- **Business use:** Find friction in product pages, checkout, campaigns, or store experience.
- **Power BI visual:** Funnel and trend by traffic source/device/store.
- **Watch out:** Do not mix users, sessions, visitors, and orders. Define attribution window and deduplicate events.

### 3. Average Order Value (AOV)
- **Meaning:** متوسط قيمة الطلب.
- **Common formula:** `AOV = Net Sales / Completed Orders`
- **Example:** 90,000 net sales / 3,000 orders = **30 per order**.
- **Business use:** Assess bundles, cross-sell, free-shipping thresholds, and product mix.
- **Power BI visual:** Card and channel/category comparison.
- **Watch out:** Use a consistent treatment of refunds, discounts, taxes, and cancelled orders.

### 4. Sell-through Rate
- **Meaning:** نسبة الوحدات المباعة من الوحدات المتاحة للبيع خلال الفترة.
- **Common formula:** `Sell-through % = Units Sold / Units Available for Sale × 100`
- **Example:** 700 units sold / 1,000 units available = **70%**.
- **Business use:** Assess product demand and replenishment or markdown needs.
- **Power BI visual:** SKU/category matrix with aging and stock-on-hand.
- **Watch out:** Define “available for sale” (opening stock plus receipts, or another agreed denominator) and account for transfers/returns.

### 5. Inventory Turnover
- **Meaning:** عدد مرات دوران المخزون خلال الفترة.
- **Common formula:** `Inventory Turnover = COGS / Average Inventory Value`
- **Example:** Annual COGS of 1,200,000 / average inventory of 200,000 = **6 turns per year**.
- **Business use:** Assess inventory movement and capital tied up in stock.
- **Power BI visual:** Trend by category/store, paired with inventory aging.
- **Watch out:** Use cost rather than revenue in the conventional formula; define average inventory and align valuation methods.

### 6. Customer Repeat Purchase Rate
- **Meaning:** نسبة العملاء الذين اشتروا مرة أخرى خلال فترة محددة.
- **Common formula:** `Repeat Purchase Rate = Customers with 2+ Purchases in Period / Customers Purchasing in Period × 100`
- **Example:** 300 repeat purchasers / 1,000 purchasing customers = **30%**.
- **Business use:** Understand retention and customer loyalty.
- **Power BI visual:** Cohort matrix and monthly trend.
- **Watch out:** Specify customer identity rules, purchase window, and whether the measure is cohort-based or period-based.

---

## 3. Supply Chain & Logistics — سلاسل الإمداد والخدمات اللوجستية

Focus: delivery reliability, inventory availability, supplier performance, and lead times.

### 1. On-Time In-Full (OTIF)
- **Meaning:** نسبة الطلبات التي وصلت في الموعد المحدد وبالكمية المطلوبة كاملة.
- **Common formula:** `OTIF % = Orders Delivered On Time and In Full / Eligible Orders × 100`
- **Example:** 920 compliant orders / 1,000 eligible orders = **92%**.
- **Business use:** Monitor customer service and end-to-end fulfillment.
- **Power BI visual:** KPI card and trend by carrier, warehouse, supplier, and customer.
- **Watch out:** Define the promised date, tolerance, order-versus-line grain, partial shipments, and exclusions.

### 2. Inventory Turnover
- **Meaning:** مدى سرعة استهلاك أو بيع المخزون مقارنة بمتوسط قيمته.
- **Common formula:** `Inventory Turnover = COGS (or Cost of Usage) / Average Inventory Value`
- **Example:** Annual COGS of 1,200,000 / average inventory of 200,000 = **6 turns**.
- **Business use:** Identify slow-moving stock and capital tied up in inventory.
- **Power BI visual:** Trend and product/location matrix.
- **Watch out:** Use a consistent cost basis and a meaningful average inventory measure.

### 3. Stockout Rate
- **Meaning:** نسبة فرص الطلب أو فترات الطلب التي حدث فيها عدم توفر الصنف.
- **Common formula:** `Stockout Rate = Stockout Events (or Unavailable Item-Location Observations) / Total Eligible Events or Observations × 100`
- **Example:** 45 stockout observations / 900 eligible observations = **5%**.
- **Business use:** Identify availability problems and lost-sales risk.
- **Power BI visual:** Trend by SKU, warehouse, and location.
- **Watch out:** Choose an event-based or time-observation-based definition; do not mix the two.

### 4. Supplier On-Time Delivery
- **Meaning:** نسبة استلامات المورد التي وصلت في الموعد المتفق عليه.
- **Common formula:** `Supplier On-Time % = Receipts On or Before Agreed Date / Eligible Receipts × 100`
- **Example:** 190 on-time receipts / 200 eligible receipts = **95%**.
- **Business use:** Compare supplier reliability and support sourcing decisions.
- **Power BI visual:** Supplier scorecard and late-receipt trend.
- **Watch out:** Define the due date, receipt grain, partial deliveries, and approved date changes.

### 5. Order Cycle Time
- **Meaning:** الوقت من نقطة بداية محددة للطلب حتى نقطة اكتماله.
- **Common formula:** `Order Cycle Time = Delivery/Completion Timestamp − Order Start Timestamp`
- **Example:** Order accepted Monday at 09:00 and delivered Tuesday at 15:00 = **30 elapsed hours**.
- **Business use:** Track speed of fulfillment and identify process delays.
- **Power BI visual:** Median and percentile trend by route, warehouse, or channel.
- **Watch out:** Explicitly define start/end events and whether elapsed or business hours are measured.

### 6. Freight Cost per Unit Shipped
- **Meaning:** متوسط تكلفة الشحن لكل وحدة مشحونة.
- **Common formula:** `Freight Cost per Unit = Freight Cost / Units Shipped`
- **Example:** Freight cost of 12,000 / 6,000 units = **2 per unit**.
- **Business use:** Monitor transportation cost and compare routes or carriers.
- **Power BI visual:** Carrier/route matrix and cost trend.
- **Watch out:** Compare like-for-like shipment types, distances, weight/volume, fuel surcharges, and currency.

---

## 4. Marketing & Growth — التسويق والنمو

Focus: acquisition efficiency, campaign response, conversion, and return on spend.

### 1. Customer Acquisition Cost (CAC)
- **Meaning:** متوسط تكلفة اكتساب عميل جديد.
- **Common formula:** `CAC = Defined Sales and Marketing Acquisition Costs / New Customers Acquired`
- **Example:** 50,000 acquisition spend / 250 new customers = **200 per new customer**.
- **Business use:** Evaluate acquisition efficiency and compare channels.
- **Power BI visual:** CAC trend and channel campaign matrix.
- **Watch out:** State which costs are included and use a consistent attribution period and customer definition.

### 2. Return on Ad Spend (ROAS)
- **Meaning:** الإيراد المنسوب للإعلانات مقابل كل وحدة من الإنفاق الإعلاني.
- **Common formula:** `ROAS = Attributed Revenue / Advertising Spend`
- **Example:** 120,000 attributed revenue / 30,000 ad spend = **4.0x**.
- **Business use:** Compare advertising campaign performance.
- **Power BI visual:** Campaign matrix with spend, attributed revenue, and ROAS.
- **Watch out:** ROAS is not profit or ROI. Attribution model, returns, discounts, and revenue windows matter.

### 3. Click-Through Rate (CTR)
- **Meaning:** نسبة مرات النقر إلى مرات الظهور.
- **Common formula:** `CTR % = Clicks / Impressions × 100`
- **Example:** 2,400 clicks / 80,000 impressions = **3%**.
- **Business use:** Assess ad or message engagement.
- **Power BI visual:** Trend by campaign, creative, placement, and device.
- **Watch out:** Compare the same placement and campaign objective; a higher CTR does not guarantee conversions.

### 4. Conversion Rate
- **Meaning:** نسبة الأشخاص أو الجلسات التي أكملت الإجراء المطلوب.
- **Common formula:** `Conversion Rate = Conversions / Defined Eligible Visits, Clicks, or Leads × 100`
- **Example:** 500 conversions / 10,000 eligible sessions = **5%**.
- **Business use:** Evaluate landing pages, lead funnels, and campaign quality.
- **Power BI visual:** Funnel with stage-to-stage conversion.
- **Watch out:** Clearly define the conversion event and denominator; use consistent attribution rules.

### 5. Cost per Lead (CPL)
- **Meaning:** متوسط تكلفة الحصول على lead.
- **Common formula:** `CPL = Campaign Cost / Number of Valid Leads`
- **Example:** 18,000 campaign cost / 300 valid leads = **60 per lead**.
- **Business use:** Compare lead-generation campaigns.
- **Power BI visual:** Campaign scorecard with lead quality and conversion to customer.
- **Watch out:** Define a valid lead and distinguish raw leads from qualified leads.

### 6. Marketing Return on Investment (Marketing ROI)
- **Meaning:** العائد الصافي مقارنة بتكلفة الاستثمار التسويقي.
- **Common formula:** `Marketing ROI % = (Incremental Profit Attributable to Marketing − Marketing Investment) / Marketing Investment × 100`
- **Example:** Attributable incremental profit of 40,000 less 20,000 investment, divided by 20,000 = **100% ROI**.
- **Business use:** Assess whether marketing generated value beyond its cost.
- **Power BI visual:** Campaign profitability view with assumptions and attribution.
- **Watch out:** Use incremental profit where possible, not attributed revenue alone. Attribution and causal impact are not interchangeable.

---

## 5. Human Resources (HR) — الموارد البشرية

Focus: workforce stability, hiring efficiency, absence, and people costs.

### 1. Employee Turnover Rate
- **Meaning:** نسبة الموظفين الذين غادروا المؤسسة خلال الفترة.
- **Common formula:** `Turnover % = Employees Who Left During Period / Average Headcount During Period × 100`
- **Example:** 24 exits / average headcount of 400 = **6%** for the period.
- **Business use:** Monitor retention and investigate patterns by department, tenure, or role.
- **Power BI visual:** Monthly trend and department matrix.
- **Watch out:** Separate voluntary, involuntary, and regretted turnover where relevant; specify the period and headcount method.

### 2. Time to Hire
- **Meaning:** الوقت من بدء عملية التوظيف أو فتح الطلب حتى قبول المرشح، حسب التعريف المعتمد.
- **Common formula:** `Time to Hire = Offer Acceptance Date − Candidate Application Date` (one common convention).
- **Example:** Application on 1 May and acceptance on 21 May = **20 calendar days**.
- **Business use:** Identify delays in recruitment stages.
- **Power BI visual:** Median time by role, recruiter, and department.
- **Watch out:** Time to hire differs from time to fill; state start/end events and use median when outliers distort the average.

### 3. Time to Fill
- **Meaning:** الوقت اللازم لملء وظيفة شاغرة.
- **Common formula:** `Time to Fill = Accepted Offer Date − Requisition Open Date`
- **Example:** Requisition opened 1 June and offer accepted 25 June = **24 calendar days**.
- **Business use:** Assess workforce planning and recruiting pipeline speed.
- **Power BI visual:** Trend and role-level matrix.
- **Watch out:** Define how paused, cancelled, or reopened requisitions are handled.

### 4. Absenteeism Rate
- **Meaning:** نسبة وقت العمل المجدول الذي فُقد بسبب الغياب وفق سياسة المؤسسة.
- **Common formula:** `Absenteeism % = Unscheduled Absence Hours / Scheduled Work Hours × 100`
- **Example:** 320 absence hours / 16,000 scheduled hours = **2%**.
- **Business use:** Monitor staffing pressure and absence patterns.
- **Power BI visual:** Trend by department and month.
- **Watch out:** Follow local law and company privacy rules; define included absence types and protect employee-level sensitive data.

### 5. Cost per Hire
- **Meaning:** متوسط تكلفة توظيف موظف جديد.
- **Common formula:** `Cost per Hire = Defined Internal Recruiting Costs + External Recruiting Costs / Number of Hires`
- **Example:** Total defined recruiting costs of 60,000 / 20 hires = **3,000 per hire**.
- **Business use:** Compare recruitment channels and hiring programs.
- **Power BI visual:** Cost and hiring-volume comparison by source and department.
- **Watch out:** State cost inclusions and use the same reporting period for costs and hires.

### 6. Training Completion Rate
- **Meaning:** نسبة المتعلمين الذين أكملوا التدريب المطلوب.
- **Common formula:** `Training Completion % = Required Training Assignments Completed / Required Training Assignments Due × 100`
- **Example:** 900 completed assignments / 1,000 assignments due = **90%**.
- **Business use:** Monitor mandatory training and learning program delivery.
- **Power BI visual:** Completion by course, department, and due date.
- **Watch out:** Count assignments rather than people when one person can have multiple courses; define completion and due-date rules.

---

## 6. Customer Service & CRM — خدمة العملاء وإدارة علاقات العملاء

Focus: response speed, resolution quality, service levels, and customer experience.

### 1. First Response Time
- **Meaning:** الوقت بين استلام طلب العميل وأول رد من فريق الدعم.
- **Common formula:** `First Response Time = First Human Response Timestamp − Ticket Created Timestamp`
- **Example:** Ticket received at 10:00 and first human response at 10:18 = **18 minutes**.
- **Business use:** Monitor responsiveness by channel, priority, and support team.
- **Power BI visual:** Median/P90 trend and SLA matrix.
- **Watch out:** Decide whether automated acknowledgments count and whether time uses business hours or elapsed time.

### 2. First Contact Resolution (FCR)
- **Meaning:** نسبة الحالات التي تم حلها من أول تواصل دون متابعة إضافية، وفق تعريف محدد.
- **Common formula:** `FCR % = Eligible Cases Resolved at First Contact / Eligible Cases × 100`
- **Example:** 720 first-contact resolutions / 900 eligible cases = **80%**.
- **Business use:** Assess service effectiveness and avoid repeat contacts.
- **Power BI visual:** Trend by issue type, channel, and team.
- **Watch out:** Define “resolved” and the allowed repeat-contact window; ticket closure alone may not prove resolution.

### 3. Customer Satisfaction Score (CSAT)
- **Meaning:** مستوى رضا العميل بناءً على استبيان بعد الخدمة.
- **Common formula:** `CSAT % = Satisfied Responses / Valid Survey Responses × 100`, where “satisfied” is defined by the survey scale.
- **Example:** 420 satisfied responses / 500 valid responses = **84%**.
- **Business use:** Monitor customer experience and investigate dissatisfaction drivers.
- **Power BI visual:** Trend and breakdown by channel, issue, and service team.
- **Watch out:** Report response count and response rate; survey participation can bias results.

### 4. Net Promoter Score (NPS)
- **Meaning:** مقياس لمدى استعداد العملاء للتوصية بالخدمة أو المنتج.
- **Common formula:** `NPS = % Promoters − % Detractors`, based on a 0–10 recommendation question.
- **Example:** 55% promoters − 20% detractors = **NPS +35**.
- **Business use:** Track advocacy and compare customer segments over time.
- **Power BI visual:** NPS trend with response volume and segment breakdown.
- **Watch out:** NPS ranges from −100 to +100; it is not the percentage of satisfied customers.

### 5. Average Resolution Time
- **Meaning:** متوسط الوقت اللازم لحل الحالة أو إغلاقها وفق تعريف الخدمة.
- **Common formula:** `Average Resolution Time = Average(Resolved Timestamp − Created Timestamp)` for eligible resolved cases.
- **Example:** Total 1,200 resolution hours across 100 cases = **12 hours per case**.
- **Business use:** Identify difficult case types and operational bottlenecks.
- **Power BI visual:** Median and percentile trend by priority and category.
- **Watch out:** Open tickets are not resolved cases; report backlog age separately and define business-hours treatment.

### 6. SLA Achievement Rate
- **Meaning:** نسبة الحالات التي حققت اتفاقية مستوى الخدمة.
- **Common formula:** `SLA Achievement % = Eligible Cases Meeting SLA / Eligible Cases × 100`
- **Example:** 950 cases met SLA out of 1,000 eligible cases = **95%**.
- **Business use:** Monitor contractual service commitments.
- **Power BI visual:** SLA status cards and breach matrix by priority/team.
- **Watch out:** Define which SLA applies, pause rules, business calendars, and whether the target is response or resolution.

---

## 7. IT & SaaS — تقنية المعلومات والبرمجيات كخدمة

Focus: recurring revenue, customer retention, and service reliability.

### 1. Monthly Recurring Revenue (MRR)
- **Meaning:** الإيراد الشهري المتكرر من الاشتراكات النشطة، وفق قواعد الاعتراف والتطبيع المعتمدة.
- **Common formula:** `MRR = Sum of Normalized Monthly Recurring Subscription Amounts`
- **Example:** 100 monthly subscriptions at 50 each contribute **5,000 MRR**, before adjustments.
- **Business use:** Monitor subscription business scale and expansion/contraction.
- **Power BI visual:** MRR trend and new/expansion/contraction/churn bridge.
- **Watch out:** Define treatment of discounts, annual plans, usage-based fees, refunds, currency, and inactive subscriptions.

### 2. Annual Recurring Revenue (ARR)
- **Meaning:** القيمة السنوية المكافئة للإيراد المتكرر.
- **Common formula:** `ARR = MRR × 12` when the business model and MRR definition support this convention.
- **Example:** MRR of 100,000 gives **1,200,000 ARR** under the stated convention.
- **Business use:** Track recurring-revenue scale for subscription businesses.
- **Power BI visual:** ARR trend and movement bridge.
- **Watch out:** ARR is not necessarily the same as recognized annual revenue or total contract value.

### 3. Customer Churn Rate
- **Meaning:** نسبة العملاء الذين توقفوا عن الاشتراك خلال الفترة.
- **Common formula:** `Customer Churn % = Customers Lost During Period / Customers at Start of Period × 100`
- **Example:** 40 lost customers / 1,000 starting customers = **4% monthly churn**.
- **Business use:** Assess retention and identify at-risk customer groups.
- **Power BI visual:** Cohort retention and churn trend.
- **Watch out:** Define customer identity, cancellations versus expirations, reactivations, and period boundaries. Customer churn differs from revenue churn.

### 4. Net Revenue Retention (NRR)
- **Meaning:** مقدار الإيراد المتكرر الذي احتفظت به قاعدة العملاء الحالية بعد التوسّع والانكماش والإلغاء.
- **Common formula:** `NRR % = (Starting Recurring Revenue + Expansion − Contraction − Churn) / Starting Recurring Revenue × 100`
- **Example:** Starting revenue 100,000 + 15,000 expansion − 5,000 contraction − 10,000 churn = **100% NRR**.
- **Business use:** Understand whether existing customers grow or shrink in revenue.
- **Power BI visual:** Cohort NRR trend and revenue movement bridge.
- **Watch out:** Exclude new-customer revenue from the cohort calculation and keep the measurement window consistent.

### 5. Uptime / Availability
- **Meaning:** نسبة الوقت الذي كانت فيه الخدمة متاحة وفق اتفاقية القياس.
- **Common formula:** `Availability % = (Eligible Service Time − Downtime) / Eligible Service Time × 100`
- **Example:** 719.28 available hours / 720 eligible hours = **99.9%**.
- **Business use:** Monitor reliability and contractual availability commitments.
- **Power BI visual:** Availability trend, incident timeline, and service matrix.
- **Watch out:** Define maintenance exclusions, monitoring source, incident impact, and measurement window.

### 6. Mean Time to Restore (MTTR)
- **Meaning:** متوسط الوقت اللازم لاستعادة الخدمة بعد حدوث عطل؛ قد تختلف تسمية MTTR بين المؤسسات.
- **Common formula:** `Mean Time to Restore = Total Restoration Time Across Incidents / Number of Restored Incidents`
- **Example:** 20 total restoration hours / 5 incidents = **4 hours per incident**.
- **Business use:** Assess incident response and service recovery.
- **Power BI visual:** Trend by service/severity and incident-duration distribution.
- **Watch out:** Define whether MTTR means restore, repair, or resolve time and state which incidents are included.

---

## 8. Finance & Accounting — المالية والمحاسبة

Focus: profitability, liquidity, cash collection, and budget control.

### 1. Revenue Growth Rate
- **Meaning:** نسبة التغير في الإيرادات مقارنة بفترة سابقة.
- **Common formula:** `Revenue Growth % = (Current Period Revenue − Comparable Prior Period Revenue) / Comparable Prior Period Revenue × 100`
- **Example:** Revenue rises from 200,000 to 230,000 = **15% growth**.
- **Business use:** Track commercial performance by product, customer, region, and period.
- **Power BI visual:** Current versus prior period cards and monthly trend.
- **Watch out:** Ensure comparable periods and consistent accounting treatment; handle zero or negative prior-period values explicitly.

### 2. Gross Profit Margin
- **Meaning:** نسبة الإيرادات المتبقية بعد خصم تكلفة البضاعة المباعة.
- **Common formula:** `Gross Profit Margin % = (Revenue − COGS) / Revenue × 100`
- **Example:** Revenue 500,000 and COGS 300,000 = **40% gross margin**.
- **Business use:** Monitor product/customer profitability and cost pressure.
- **Power BI visual:** Margin trend and product/customer matrix.
- **Watch out:** Use the organization's agreed revenue and COGS definitions; do not confuse margin with markup.

### 3. Operating Expense (OPEX) Variance
- **Meaning:** الفرق بين المصروفات الفعلية والموازنة.
- **Common formula:** `OPEX Variance = Actual OPEX − Budget OPEX`
- **Example:** Actual OPEX 110,000 − budget 100,000 = **10,000 unfavorable** if lower expense is preferred.
- **Business use:** Identify overspending and explain budget deviations.
- **Power BI visual:** Actual vs budget matrix with absolute and percentage variance.
- **Watch out:** Sign conventions depend on the report; label favorable/unfavorable explicitly and compare matching periods/accounts.

### 4. Current Ratio
- **Meaning:** قدرة الأصول المتداولة على تغطية الالتزامات المتداولة.
- **Common formula:** `Current Ratio = Current Assets / Current Liabilities`
- **Example:** Current assets 300,000 / current liabilities 150,000 = **2.0x**.
- **Business use:** Assess short-term balance-sheet liquidity.
- **Power BI visual:** KPI card and trend alongside working-capital components.
- **Watch out:** A higher ratio is not always better; inventory quality, receivables collectability, and industry context matter.

### 5. Days Sales Outstanding (DSO)
- **Meaning:** تقدير متوسط عدد الأيام اللازمة لتحصيل المبيعات الآجلة.
- **Common formula:** `DSO = Average Trade Receivables / Credit Sales for Period × Number of Days in Period` (one common method).
- **Example:** Average receivables 100,000 / credit sales 600,000 × 30 days = **5 days**.
- **Business use:** Monitor collection performance and working capital.
- **Power BI visual:** DSO trend, overdue aging, and customer matrix.
- **Watch out:** Use credit sales and compatible receivables scope; alternative DSO methods exist and can produce different results.

### 6. Operating Cash Flow
- **Meaning:** صافي التدفقات النقدية الناتجة عن الأنشطة التشغيلية خلال الفترة.
- **Common calculation:** Use net cash from operating activities as defined in the cash flow statement and applicable accounting framework.
- **Example:** Cash received from operations 250,000 less operating cash payments 210,000 = **40,000 net operating cash flow** in a simplified example.
- **Business use:** Assess whether core operations generate cash.
- **Power BI visual:** Monthly cash-flow trend and bridge of key inflows/outflows.
- **Watch out:** Cash flow differs from profit because of non-cash items and working-capital movements; use the organization's accounting mapping.

---

## 9. Healthcare — الرعاية الصحية

Focus: patient flow, capacity, care quality, and revenue-cycle operations.

### 1. Bed Occupancy Rate
- **Meaning:** نسبة أيام الأسرّة المشغولة إلى أيام الأسرّة المتاحة خلال الفترة.
- **Common formula:** `Bed Occupancy % = Inpatient Bed-Days Occupied / Available Inpatient Bed-Days × 100`
- **Example:** 2,100 occupied bed-days / 3,000 available bed-days = **70%**.
- **Business use:** Monitor capacity and inpatient utilization.
- **Power BI visual:** Trend by ward and facility.
- **Watch out:** Define available beds, temporary closures, observation beds, and the reporting period consistently.

### 2. Average Length of Stay (ALOS)
- **Meaning:** متوسط مدة إقامة المرضى المنومين.
- **Common formula:** `ALOS = Total Inpatient Length of Stay for Discharges / Number of Eligible Discharges`
- **Example:** 600 inpatient days / 100 eligible discharges = **6 days**.
- **Business use:** Understand patient flow and resource use.
- **Power BI visual:** Trend by service line and diagnosis group where appropriate.
- **Watch out:** Define admission/discharge dates, same-day cases, transfers, and inclusion criteria; clinical complexity affects comparisons.

### 3. 30-Day Readmission Rate
- **Meaning:** نسبة حالات الخروج التي يتبعها دخول غير مخطط خلال 30 يومًا، وفق تعريف القياس.
- **Common formula:** `30-Day Readmission % = Eligible Discharges Followed by an Unplanned Readmission Within 30 Days / Eligible Discharges × 100`
- **Example:** 45 qualifying readmissions / 900 eligible discharges = **5%**.
- **Business use:** Support care-quality review and transition-of-care improvement.
- **Power BI visual:** Trend by service line with risk-adjustment context.
- **Watch out:** Use an agreed clinical definition, eligible population, transfer handling, and privacy controls. Raw comparisons may be misleading without case-mix adjustment.

### 4. Emergency Department Waiting Time
- **Meaning:** الوقت الذي ينتظره المريض في قسم الطوارئ قبل نقطة الخدمة المحددة.
- **Common formula:** `Waiting Time = Defined First Clinical Assessment Timestamp − ED Arrival Timestamp`
- **Example:** Arrival at 10:05 and assessment at 10:35 = **30 minutes**.
- **Business use:** Monitor access and patient flow.
- **Power BI visual:** Median/P90 trend by triage acuity and time of day.
- **Watch out:** Define the endpoint carefully; compare like triage categories and protect patient privacy.

### 5. Hospital-Acquired Infection Rate
- **Meaning:** معدل العدوى المكتسبة داخل المنشأة الصحية وفق تعريف مراقبة سريرية معتمد.
- **Common formula:** A common device-associated form is `Infections / Device-Days × 1,000`; other infection measures use different denominators.
- **Example:** 4 qualifying infections / 2,000 device-days × 1,000 = **2 infections per 1,000 device-days**.
- **Business use:** Monitor infection prevention and investigate trends.
- **Power BI visual:** Rate trend by unit/device type with denominators visible.
- **Watch out:** Use approved clinical surveillance definitions, adequate case counts, and risk adjustment where appropriate.

### 6. Claim Denial Rate
- **Meaning:** نسبة المطالبات المقدمة التي رُفضت كليًا أو جزئيًا، وفق طريقة العد المعتمدة.
- **Common formula:** `Claim Denial % = Denied Claims / Submitted Claims × 100` (claim-count basis; value-based rates differ).
- **Example:** 80 denied claims / 2,000 submitted claims = **4%**.
- **Business use:** Identify documentation, coding, authorization, and payer-process issues.
- **Power BI visual:** Payer/reason matrix and denial trend.
- **Watch out:** Distinguish claim-count rate from denied-dollar rate and account for resubmissions and adjudication lag.

---

## 10. Project Management — إدارة المشاريع

Focus: schedule performance, cost control, delivery, and scope.

### 1. Schedule Performance Index (SPI)
- **Meaning:** مؤشر أداء الجدول الزمني باستخدام القيمة المكتسبة.
- **Common formula:** `SPI = Earned Value (EV) / Planned Value (PV)`
- **Example:** EV 80,000 / PV 100,000 = **0.80**.
- **Business use:** Compare work completed with work planned at the status date.
- **Power BI visual:** KPI card with EV/PV trend and milestone status.
- **Watch out:** SPI depends on reliable earned-value rules and a consistent status date; it is not directly a percentage of calendar time saved.

### 2. Cost Performance Index (CPI)
- **Meaning:** مؤشر كفاءة التكلفة مقارنة بالقيمة المكتسبة.
- **Common formula:** `CPI = Earned Value (EV) / Actual Cost (AC)`
- **Example:** EV 90,000 / AC 100,000 = **0.90**.
- **Business use:** Monitor cost efficiency of delivered work.
- **Power BI visual:** CPI trend with budget and forecast.
- **Watch out:** Use consistent project cost and earned-value rules; a value below 1 indicates cost efficiency below plan under standard EVM interpretation.

### 3. Schedule Variance (SV)
- **Meaning:** الفرق بين القيمة المكتسبة والقيمة المخططة.
- **Common formula:** `SV = Earned Value (EV) − Planned Value (PV)`
- **Example:** EV 80,000 − PV 100,000 = **−20,000** in the project's value units.
- **Business use:** Quantify schedule-related performance in earned-value terms.
- **Power BI visual:** Trend and work-package matrix.
- **Watch out:** SV is expressed in value units, not days; use schedule dates or schedule-specific analysis to communicate calendar delay.

### 4. Cost Variance (CV)
- **Meaning:** الفرق بين القيمة المكتسبة والتكلفة الفعلية.
- **Common formula:** `CV = Earned Value (EV) − Actual Cost (AC)`
- **Example:** EV 90,000 − AC 100,000 = **−10,000**.
- **Business use:** Identify cost overruns relative to completed work.
- **Power BI visual:** Work-package variance matrix and trend.
- **Watch out:** Apply consistent cost coding, status dates, and earned-value rules.

### 5. Milestone On-Time Completion Rate
- **Meaning:** نسبة المعالم التي اكتملت في أو قبل تاريخها المخطط.
- **Common formula:** `On-Time Milestone % = Eligible Milestones Completed On or Before Baseline Date / Eligible Milestones Due or Completed × 100`
- **Example:** 18 on-time milestones / 20 eligible milestones = **90%**.
- **Business use:** Communicate delivery reliability to stakeholders.
- **Power BI visual:** Milestone timeline and project matrix.
- **Watch out:** Define the eligible milestone population and whether the baseline can be changed; retain original baseline for meaningful comparisons.

### 6. Forecast Cost at Completion (EAC)
- **Meaning:** التقدير المتوقع للتكلفة الإجمالية عند انتهاء المشروع.
- **Common formula:** Under one common EVM assumption, `EAC = Budget at Completion (BAC) / CPI`.
- **Example:** BAC 500,000 / CPI 0.90 = **555,556** approximately.
- **Business use:** Forecast potential final cost and support corrective action.
- **Power BI visual:** EAC vs BAC card and forecast trend.
- **Watch out:** EAC has multiple valid methods depending on expected future performance; document the selected assumption.

---

## 11. Manufacturing & Production — التصنيع والإنتاج

Focus: equipment effectiveness, quality, throughput, and unit cost.

### 1. Overall Equipment Effectiveness (OEE)
- **Meaning:** مقياس يجمع الإتاحة والأداء والجودة لقياس فعالية المعدات.
- **Common formula:** `OEE = Availability × Performance × Quality`
- **Example:** Availability 90% × Performance 95% × Quality 98% = **83.79% OEE**.
- **Business use:** Identify losses from downtime, slow cycles, and defects.
- **Power BI visual:** OEE trend with availability/performance/quality breakdown.
- **Watch out:** Define planned production time, ideal cycle time, and good units consistently; do not average percentages without appropriate weighting.

### 2. First Pass Yield (FPY)
- **Meaning:** نسبة الوحدات التي اجتازت العملية من أول مرة دون إعادة عمل.
- **Common formula:** `FPY % = Units Passing Process First Time / Units Entering Process × 100`
- **Example:** 950 first-pass good units / 1,000 units entering = **95%**.
- **Business use:** Monitor process quality and rework.
- **Power BI visual:** Trend by operation, line, product, and shift.
- **Watch out:** Define how rework, retesting, scrap, and multi-stage processes are treated.

### 3. Scrap Rate
- **Meaning:** نسبة الإنتاج الذي تم استبعاده كخردة أو غير صالح.
- **Common formula:** `Scrap Rate % = Scrapped Units / Total Units Produced or Started × 100`
- **Example:** 25 scrapped units / 1,000 units started = **2.5%**.
- **Business use:** Quantify quality losses and material waste.
- **Power BI visual:** Trend by machine, product, material, and defect reason.
- **Watch out:** Define the denominator and distinguish scrap from rework and normal yield loss.

### 4. Production Schedule Attainment
- **Meaning:** مدى تحقيق خطة الإنتاج خلال الفترة.
- **Common formula:** One common version is `Schedule Attainment % = Planned Quantity Completed Within the Scheduled Window / Planned Quantity × 100`.
- **Example:** 9,000 scheduled units completed within the window / 10,000 planned = **90%**.
- **Business use:** Monitor adherence to the production plan.
- **Power BI visual:** Planned-versus-actual by work center, product, and shift.
- **Watch out:** Agree on quantity versus order-count basis, schedule-window rules, substitutions, and rescheduling treatment.

### 5. Production Cycle Time
- **Meaning:** الوقت المستغرق لإنتاج وحدة أو دفعة بين نقطتي بداية ونهاية محددتين.
- **Common formula:** `Cycle Time = Process End Timestamp − Process Start Timestamp` for the defined unit/batch and process.
- **Example:** A batch starts at 08:00 and completes at 10:30 = **2.5 hours**.
- **Business use:** Identify bottlenecks and compare process performance.
- **Power BI visual:** Trend and operation/product matrix, with median and percentile.
- **Watch out:** Distinguish processing time from total lead time, including queue and waiting time.

### 6. Manufacturing Cost per Unit
- **Meaning:** متوسط تكلفة تصنيع الوحدة وفق نطاق التكلفة المحدد.
- **Common formula:** `Manufacturing Cost per Unit = Defined Manufacturing Costs / Good Units Produced`
- **Example:** Manufacturing cost of 120,000 / 10,000 good units = **12 per good unit**.
- **Business use:** Monitor cost efficiency and product margin.
- **Power BI visual:** Cost trend by product/line with labor, material, and overhead breakdown.
- **Watch out:** Define included direct/indirect costs, overhead allocation, work in progress, scrap, and the good-unit denominator.

---

## 12. Banking & Financial Services — البنوك والخدمات المالية

Focus: credit quality, liquidity, operating efficiency, and customer service. Use approved regulatory definitions for formal reporting.

### 1. Non-Performing Loan (NPL) Ratio
- **Meaning:** نسبة القروض غير المنتظمة إلى إجمالي القروض وفق التعريف التنظيمي أو المحاسبي المعتمد.
- **Common formula:** `NPL Ratio % = Non-Performing Loans / Gross Loans × 100`
- **Example:** NPLs of 12 million / gross loans of 600 million = **2%**.
- **Business use:** Monitor credit portfolio asset quality.
- **Power BI visual:** Trend by product, segment, and portfolio.
- **Watch out:** Follow the applicable regulator/accounting definition for non-performing exposures, loan scope, and gross/net balances.

### 2. Loan Delinquency Rate
- **Meaning:** نسبة القروض أو الحسابات المتأخرة عن السداد وفق شريحة التأخير المحددة.
- **Common formula:** `Delinquency Rate % = Loans Meeting Defined Days-Past-Due Threshold / Relevant Loan Portfolio × 100`
- **Example:** 30 million past the chosen threshold / 1,000 million relevant portfolio = **3%**.
- **Business use:** Track early credit stress and collections performance.
- **Power BI visual:** Days-past-due aging buckets by product and segment.
- **Watch out:** State the DPD threshold, account-versus-balance basis, and treatment of restructures and exposures.

### 3. Cost-to-Income Ratio
- **Meaning:** نسبة مصروفات التشغيل إلى الدخل التشغيلي وفق تعريف المؤسسة.
- **Common formula:** `Cost-to-Income % = Operating Expenses / Defined Operating Income × 100`
- **Example:** Operating expenses of 60 million / operating income of 100 million = **60%**.
- **Business use:** Monitor operating efficiency.
- **Power BI visual:** Trend with expense and income breakdowns.
- **Watch out:** Banks may define operating income and excluded items differently; follow the reporting policy.

### 4. Net Interest Margin (NIM)
- **Meaning:** صافي دخل الفوائد مقارنة بمتوسط الأصول المدرة للفائدة.
- **Common formula:** `NIM % = Net Interest Income / Average Interest-Earning Assets × 100` for the defined annualized period.
- **Example:** Annual net interest income of 18 million / average interest-earning assets of 600 million = **3%**.
- **Business use:** Understand interest-earning performance and funding pressure.
- **Power BI visual:** Trend by product and period, with rate/volume context.
- **Watch out:** Annualize shorter periods consistently and use the organization's definition of interest-earning assets.

### 5. Loan-to-Deposit Ratio (LDR)
- **Meaning:** نسبة القروض إلى الودائع.
- **Common formula:** `LDR % = Defined Gross Loans / Defined Customer Deposits × 100`
- **Example:** Loans of 700 million / deposits of 1,000 million = **70%**.
- **Business use:** Monitor a relationship between lending and deposit funding.
- **Power BI visual:** Trend with loan/deposit balances.
- **Watch out:** Scope, regulatory adjustments, and interpretation differ by institution and jurisdiction; it is not a standalone liquidity assessment.

### 6. Customer Acquisition Cost (Banking)
- **Meaning:** متوسط تكلفة اكتساب عميل جديد ضمن نطاق منتج أو قناة محددة.
- **Common formula:** `CAC = Defined Acquisition Costs / New Customers Acquired`
- **Example:** Acquisition costs of 2 million / 10,000 new customers = **200 per new customer**.
- **Business use:** Compare acquisition channels and customer onboarding programs.
- **Power BI visual:** Channel scorecard with activation, product adoption, and retention.
- **Watch out:** Define “new customer,” include relevant onboarding costs consistently, and consider customer quality and long-term value.

---

## Suggested cross-domain Power BI modeling practices

- Build a proper Date dimension and define whether each KPI uses transaction date, posting date, order date, delivery date, or another business event.
- Keep fact tables at a clearly documented grain; do not sum ratios or percentages across rows.
- For ratios, calculate the aggregated numerator divided by the aggregated denominator when appropriate, rather than averaging row-level percentages.
- Use explicit measures for KPI calculations and document their assumptions.
- Distinguish counts, rates, durations, balances, flows, and snapshot measures.
- For prior-period comparisons, define calendar/fiscal logic and handle incomplete periods.
- Use consistent currency conversion and valuation rules for financial comparisons.
- Protect sensitive HR and healthcare information through aggregation, access control, and data minimization.
- Include numerator, denominator, sample size, and reporting period in tooltips or detail pages where they aid interpretation.
- Validate each metric with the business owner before publishing.

## Recommended initial Power BI dashboard patterns

| Business need | Useful patterns |
|---|---|
| Executive overview | KPI cards, period comparison, trend lines, target variance |
| Performance by category | Matrix, ranked bar chart, conditional formatting |
| Process analysis | Funnel, stage conversion, cycle-time distribution |
| Operational monitoring | Exception table, SLA indicators, heatmap |
| Financial analysis | Actual vs budget matrix, variance bridge, cash-flow trend |
| Inventory analysis | On-hand, aging, turnover, stockout and supplier views |
| Workforce analysis | Headcount trend, turnover, hiring funnel, department matrix |
| Quality analysis | Yield, defects, rework, Pareto chart, process trend |

