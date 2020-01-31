/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facades;

import dto.EmployeeDTO;
import entities.Employee;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

/**
 *
 * @author rando
 */
public class EmployeeFacade {

    private static EntityManagerFactory emf;
    private static EmployeeFacade instance;

    //Constructor(s)
    public EmployeeFacade() {
    }

    //Get our facade - Singleton.
    public static EmployeeFacade getEmployeeFacade(EntityManagerFactory _emf) {
        if (instance == null) {
            emf = _emf;
            instance = new EmployeeFacade();
        }
        return instance;
    }

    //PSVM
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu");
        EmployeeFacade facade = EmployeeFacade.getEmployeeFacade(emf);
        //Add Employee
        EmployeeDTO e1 = facade.createEmployee("Hans", "Pertlarsens Vej", 100000L);
        EmployeeDTO e2 = facade.createEmployee("Frank", "QWER Vej", 123456L);
        EmployeeDTO e3 = facade.createEmployee("Joseph", "Christiansborg Vej", 420L);
        //Find Employee by ID
        System.out.println("\nEmployee (Found by id = 2):               " + facade.getEmployeeByID(2L));
        //Find Employee by name
        System.out.println("\nEmployee (Found by name = Joseph):        " + facade.getEmployeeByName("Joseph"));
        //Find Employee with highest sallary
        System.out.println("\nEmployee (Found highest salary):          " + facade.getEmployeeWithHighestSalary());
        //Find list of all Employees
        System.out.println("\nList of all employees - Down below");
        for (Employee employee : facade.getAllEmployees()) {
            System.out.println(employee);
        }
    }

    //CRUD Opperations
    //C:
    public EmployeeDTO createEmployee(String name, String address, Long salary) {
        Employee employee = new Employee(name, address, salary);
        EntityManager em = emf.createEntityManager();
        try {
            em.getTransaction().begin();
            em.persist(employee);
            em.getTransaction().commit();
            return new EmployeeDTO(employee);
        } finally {
            em.close();
        }
    }

    public void populateDB() {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu");
        EmployeeFacade facade = EmployeeFacade.getEmployeeFacade(emf);
        //Add Employee
        EmployeeDTO e1 = facade.createEmployee("Hans", "Pertlarsens Vej", 100000L);
        EmployeeDTO e2 = facade.createEmployee("Frank", "QWER Vej", 123456L);
        EmployeeDTO e3 = facade.createEmployee("Joseph", "Christiansborg Vej", 420L);
    }

    //R:
    public EmployeeDTO getEmployeeByID(Long id) {
        EntityManager em = emf.createEntityManager();
        try {
            Employee e = em.find(Employee.class, id);
            return new EmployeeDTO(e);
        } finally {
            em.close();
        }
    }

    public List<EmployeeDTO> getEmployeeByName(String name) {
        EntityManager em = emf.createEntityManager();
        try {
            TypedQuery<Employee> query
                    = em.createQuery("SELECT e FROM Employee e WHERE e.name = :name", Employee.class);
            query.setParameter("name", name);
            List<EmployeeDTO> listOfEmployee = new ArrayList<>();
            for (Employee employee : query.getResultList()) {
                listOfEmployee.add(new EmployeeDTO(employee));
            }
            return listOfEmployee;
        } finally {
            em.close();
        }
    }

    public List<EmployeeDTO> getEmployeeWithHighestSalary() {
        EntityManager em = emf.createEntityManager();
        try {
            TypedQuery<Employee> query
                    = em.createQuery("SELECT e FROM Employee e WHERE e.salary = (SELECT MAX(e.salary) FROM Employee e)", Employee.class);
            List<EmployeeDTO> employeeListWithHighestSalary = new ArrayList<>();
            for (Employee employee : query.getResultList()) {
                employeeListWithHighestSalary.add(new EmployeeDTO(employee));
            }
            return employeeListWithHighestSalary;
        } finally {
            em.close();
        }
    }

    public List<Employee> getAllEmployees() {
        EntityManager em = emf.createEntityManager();
        try {
            TypedQuery<Employee> query
                    = em.createQuery("SELECT e FROM Employee e", Employee.class);
            return query.getResultList();
        } finally {
            em.close();
        }
    }

    //U:
    //D:
}
