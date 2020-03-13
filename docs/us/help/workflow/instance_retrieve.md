## Retrieve
Retrieve is to get back the intance that has been submitted or approved to reprocess.

There are two types of people that can retrieve an instance: one is the creator of instance, the other is the approver of intance.
Note: The intance can only be retrieved after the next step has not been processed or the next step is not the end of the processing steps. For example, a new intance has been submitted, if you want to modify this intance, but this intance has been approved by the next approver, this intance can not be retrieved.

- When you retrieve a new instance, you can find this intance in the "In Progress". (Note: this intance has not been approved by the next approver)
![](/assets/us/workflow/In Progress.png)
- When you want to retrieve an approved intance, you can find this intance in the "Outbox". (Note: this intance has not yet been processed by the next approver, or the next step is not the end step)
![](/assets/us/workflow/Outbox.png)

- Click on the instance you've found, and click the button in the upper right corner of this instance. When you click the "retrieve" button, you will be asked to fill out the pop-up box for the reason for the retrieve. When you click "OK", you can find this instance in "Inbox", then you can reprocess this instance.

#### Remark
- The progress of retrieve will be displayed in approval history of the form.
