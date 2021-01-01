import React, { ReactNode, ElementType } from 'react';
import { Input, InputGroup, InputRightElement, Interpolation } from '@chakra-ui/react';
import { mdiAlertCircle, mdiCheckCircle } from '@mdi/js';
import { SystemStyleObject } from '@chakra-ui/styled-system';

import { FieldPrototype } from './Builders';
import { Icon } from '../Icon';

interface IProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  name: string;
  label: ReactNode | string;
  id: string;
  as?: ElementType;
  required?: boolean;
  disabled?: boolean;
  tip?: ReactNode | string;
  helperText?: ReactNode;
  css?: SystemStyleObject;
  // fast?: boolean;
}

const InputField = ({ name, label, required, disabled, helperText, id, tip, css, ...props }: IProps) => {
  return (
    <FieldPrototype
      name={name}
      isRequired={required}
      isDisabled={disabled}
      helperText={helperText}
      tip={tip}
      id={id}
      label={label}
      css={css as Interpolation<Record<string, unknown>>}
    >
      {({ formState: { touched, errors } }, fieldProps) => {
        const isInvalid = Boolean(errors[name]);

        return (
          <InputGroup>
            <Input {...fieldProps} {...props} id={name} />
            {touched[name] && (
              <InputRightElement>
                <div>
                  <Icon path={isInvalid ? mdiAlertCircle : mdiCheckCircle} color={isInvalid ? 'red.500' : 'green.500'} size='24px' />
                </div>
              </InputRightElement>
            )}
          </InputGroup>
        );
      }}
    </FieldPrototype>
  );
};

export { InputField };
