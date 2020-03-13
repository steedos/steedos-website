## Form design

Admins can select corresponding fields to make forms according to the physical forms. User interfaces vary with field types. For instance, users can select one in several options when selection box is added by admins. User can only input numbers when “Number” field is added. You can refer to “[Form fields](form_fields.md)” for more details.

The following steps illustrate how to design a “Reimbursement” form.
- Click on “Add Workflow” at the top of pop-up interface.
- Click on “Settings” and then click “Workflow Designer” after having entered the workspace.
- Then enter the flow name “Reimbursement” and click “OK”.
- Click on “Reimbursement” in the corresponding category. The pop-up interface will be “workflow” by default. Then click on “Form” at the top of the page to switch the interface.
- Add Fields.
  - Click on “Add Fields” in “Form” page. Then select “Text” under “Input” and move it to appropriate place in the left region of the page.
  - Then select the previous “Text”. Click on “Properties” and all properties of the “Text” will be displayed. You can modify the properties if necessary. For instance, in the “Reimbursement” form, we modify field name from “Text” to “Organization”. What’s more, you can input “(applicant.organization.fullname)” in the formula box. After that, the system will find the organization automatically once an applicant submits a request. You can refer to “[Field Formula](form_formula.md)” for more details.
  
![](static/assets/us/workflow/14.png)
  - Then we should add more detailed information to the “Reimbursement” form. So we add a “Table” field. The adding method is the same as adding a “Text” field.
  - Next, we can modify the properties of “table” field. All properties of the “Table” will be displayed after clicking on “Properties”. For instance, we can modify the field name from “Table” to “Expense Reports”. Input “please enter the actual use of all invoices” in description box.
- Then we can add “Expense Category”, “Amount”, “Date” and “Total Amounts” in the “Expense Report”.
  - Expense Category
      - It is a “Drop-down” field. We can modify its property. For instance, we can input several options in “List Values” box and select it as a required field.
  - Amount
      - It is a “Number” field. We can modify its property. For instance, we can input its decimal places and default value. Except for that, we can select whether it is a required and wide field.
  -	Date
      - Then we add a date filed and modify its field name to “The date when the expense is incurred ”. Next, select it as a required field.
  - Remarks
      - It’s a text filed and we modify its name to“Remarks”.
  - Total Amounts
      - It’s a number field and we modify its name to “Total Amounts”. Next we input “sum ({Amount})” in formula box. Then the system will automatically calculate the total amount when an applicant submits a reimbursement request.
- Click the “-” icon to delete the field.
- Drag the field to move its location.
- Save the form by click “Save”, and then click “Close”.
- Return to workflow designer interface. 
- Run the flow.

If steps above are finished, then initiators can submit reimbursement requests.

