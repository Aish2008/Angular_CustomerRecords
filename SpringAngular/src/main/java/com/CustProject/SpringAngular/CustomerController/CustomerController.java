package com.CustProject.SpringAngular.CustomerController;

import com.CustProject.SpringAngular.DTO.CustomerDTO;
import com.CustProject.SpringAngular.DTO.CustomerSaveDTO;
import com.CustProject.SpringAngular.DTO.CustomerUpdateDTO;
import com.CustProject.SpringAngular.Service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1/customer")
public class CustomerController {


    @Autowired
    private CustomerService customerService;

    @PostMapping(path = "/save")
    public String saveCustomer(@RequestBody CustomerSaveDTO customerSaveDTO)
    {

        String id= customerService.addCustomer(customerSaveDTO);
        return id;
    }

    @GetMapping(path = "/getAllCustomers")
    public List<CustomerDTO> getAllCustomer()
    {

        List<CustomerDTO>allCustomers = customerService.getAllCustomer();
        return allCustomers;
    }

    @PutMapping(path = "/update")
    public String updateCustomer(@RequestBody CustomerUpdateDTO customerUpdateDTO)
    {

        String id= customerService.updateCustomers(customerUpdateDTO);
        return id;
    }

    @DeleteMapping(path = "/deleteCustomer/{id}")
    public String deleteCustomer(@PathVariable(value = "id") int id)
    {
        boolean deleteCustomer = customerService.deleteCustomer(id);
        return "Deleted";
    }

}
