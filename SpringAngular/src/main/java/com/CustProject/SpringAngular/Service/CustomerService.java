package com.CustProject.SpringAngular.Service;

import com.CustProject.SpringAngular.DTO.CustomerDTO;
import com.CustProject.SpringAngular.DTO.CustomerSaveDTO;
import com.CustProject.SpringAngular.DTO.CustomerUpdateDTO;

import java.util.List;

public interface CustomerService {
    String addCustomer(CustomerSaveDTO customerSaveDTO);

    List<CustomerDTO> getAllCustomer();

    String updateCustomers(CustomerUpdateDTO customerUpdateDTO);

    boolean deleteCustomer(int id);
}
