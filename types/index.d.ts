type Inputs = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: Services;
  budget: BudgetValue;
};

type Action = {
  type: ActionTypes;
  name: keyof Inputs;
  value: string | Services | BudgetValue;
};
