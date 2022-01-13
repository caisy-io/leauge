import React from "react";
import {TDates} from "./context/DatePickerContext";
import {DatePicker} from "./DatePicker";

// Default Date Picker Demo
export default {
  title: "Components/DatePicker",
  component: DatePickerDemo,
  argTypes: {
    active: {
      description: "Changes the state of the component to active",
      control: {type: "boolean"},
      table: {
        defaultValue: {
          summary: false,
        },
        category: 'Configurations'
      }
    },
    range: {
      description: "Select a range of dates using the range calendar",
      control: {type: "boolean"},
      table: {
        defaultValue: {
          summary: false,
        },
        category: 'Configurations'
      }
    },
    time: {
      description: "Select time",
      control: {type: "boolean"},
      table: {
        defaultValue: {
          summary: false,
        },
        category: 'Configurations'
      }
    },
    inline: {
      description: "inline datepicker",
      control: {type: "boolean"},
      table: {
        defaultValue: {
          summary: false,
        },
        category: 'Configurations'
      }
    },
    quickSelectionButtons: {
      description: "Show quick selection buttons",
      control: {type: "boolean"},
      table: {
        defaultValue: {
          summary: false,
        },
        category: 'Configurations'
      }
    },
    bottomButtons: {
      description: "Show bottom buttons",
      control: {type: "boolean"},
      table: {
        defaultValue: {
          summary: false,
        },
        category: 'Configurations'
      }
    },
    closeButton: {
      description: "Show close button. you must enable bottomButtons",
      control: {type: "boolean"},
      table: {
        defaultValue: {
          summary: false,
        },
        category: 'Configurations'
      }
    },
    saveButton: {
      description: "Show save button. you must enable bottomButtons",
      control: {type: "boolean"},
      table: {
        defaultValue: {
          summary: false,
        },
        category: 'Configurations'
      }
    },
    selectedDisplay: {
      description: "Show input to handle visibility of date picker",
      control: {type: "boolean"},
      table: {
        defaultValue: {
          summary: true,
        },
        category: 'Configurations'
      }
    },
    initialDate: {
      description: "Set initial Date, this field is required. value is array of dates (array of one date if you use single select or array of two dates if you use two dates)",
      table: {
        category: 'Options'
      }
    },
    minDate: {
      description: "Set minimum date",
      table: {
        category: 'Options'
      }
    },
    maxDate: {
      description: "Set maximum date",
      table: {
        category: 'Options'
      }
    },
    locale: {
      description: "Set localization",
      table: {
        defaultValue: {
          summary: "en",
        },
        category: 'Options'
      }
    },
    onSave: {
      description: "Run when you clicked save button and you get value of selected dates",
      table: {
        category: 'Methods'
      }
    },
    onChange: {
      description: "to get value of dates when changed",
      table: {
        category: 'Methods'
      }
    },
    onMonthChange: {
      description: "to get date of month when you changed month",
      table: {
        category: 'Methods'
      }
    },
    onClickOutside: {
      description: "run when you clicked outside datepicker",
      table: {
        category: 'Methods'
      }
    },
    onDayCreate: {
      description: "Take full control of every date cell",
      table: {
        category: 'Methods'
      }
    },
    onCancel: {
      description: "run when clicked cancel button",
      table: {
        category: 'Methods'
      }
    }
    
  },
}

function DatePickerDemo({
                          active = false,
                          bottomButtons = false,
                          closeButton = false,
                          initialDate = [new Date()] as TDates,
                          inline = false,
                          locale = "en",
                          quickSelectionButtons = false,
                          range = false,
                          saveButton = false,
                          selectedDisplay = false,
                          time = false
                        }) {
  
  return <DatePicker
    initialDate={initialDate}
    onDayCreate={(dayElem) => {
      if (Math.random() > 0.2) return;
      dayElem.classList.add("has-badge");
    }}
    locale={locale}
    withDefaultActive={active}
    withRange={range}
    withTime={time}
    withSelectedDisplay={selectedDisplay}
    withCloseButton={closeButton}
    withSaveButton={saveButton}
    withBottomButtons={bottomButtons}
    withQuickSelectionButtons={quickSelectionButtons}
    inline={inline}
  />;
}

const Template = (args) => <DatePickerDemo {...args} />;

export const Default = Template.bind({});
