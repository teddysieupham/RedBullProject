package com.customerlistcontroller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.connection.JsonResponse;
import com.database.Customer;
import com.database.CustomerDatabase;
import com.database.Package;
import com.database.UserDatabase;
import com.packagelistcontroller.PackageList;

@Controller
public class CustomerListController {
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(path = "/customerlist", method = RequestMethod.GET)
	@ResponseBody
	public JsonResponse getListCustomers(@RequestParam(value = "customerID") String customerID) {
		JsonResponse res = new JsonResponse();
		String fullName = (String) new CustomerDatabase().getCustomer(customerID).get("fullName");
		String[] name = fullName.split(" ");
		res.setResult(name[name.length - 1]);
		List<Customer> list = loadData();
		res.setResponse(list);
		return res;
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(path = "/addcustomer", method = RequestMethod.GET)
	@ResponseBody
	public JsonResponse addCustomer(@RequestParam(value = "fullName") String fullName,
			@RequestParam(value = "address") String address, @RequestParam(value = "phoneNumber") String phoneNumber)
			throws IOException, ParseException {
		JsonResponse res = new JsonResponse();
		String[] name = fullName.split(" ");
		res.setResult(name[name.length - 1]);
		boolean success = new com.database.CustomerDatabase().addCustomer(fullName, address, phoneNumber);
		res.setResponse(success);
		return res;
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(path = "/editcustomer", method = RequestMethod.GET)
	@ResponseBody
	public JsonResponse editCustomer(@RequestParam(value = "id") String id,
			@RequestParam(value = "fullName") String fullName, @RequestParam(value = "address") String address,
			@RequestParam(value = "phoneNumber") String phoneNumber) throws IOException, ParseException {
		JsonResponse res = new JsonResponse();
		String[] name = fullName.split(" ");
		res.setResult(name[name.length - 1]);
		new com.database.CustomerDatabase().editCustomer(id, fullName, address, phoneNumber);
		return res;
	}

	public List<Customer> loadData() {
		List<Customer> result = new ArrayList<Customer>();
		JSONArray jsonCustomer = new com.database.CustomerDatabase().getListCustomers();

		for (int i = 0; i < jsonCustomer.size(); i++) {
			Customer customerDB = (Customer) jsonCustomer.get(i);
			result.add(customerDB);

		}

		return result;
	}

	public static void main(String[] args) {
		System.out.println(new CustomerListController().loadData());
	}

}